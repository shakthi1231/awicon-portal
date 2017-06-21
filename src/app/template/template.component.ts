import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../core/template.service';
import { ActivatedRoute, Params , Router}   from "@angular/router";


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private templateService: TemplateService) { }
  public rows = [];
  public colNames = [];
  public templateName: string;
  public tableNames = [];
  public selectedTableName: string;
  public startRow: string;
  public fileData: File;

  ngOnInit() {
    console.log("In templates controller..");
    let row = {"name": ""};
    this.rows.push(row);
    this.templateService.tableNames()
    .subscribe((result: any) => {
      console.log("Received tableNames....", result);
       this.tableNames = result.json();
    })
  }

  public getRows() {
    return new Array(this.rows);   
  }

  public addRow() {
    console.log("In addRow...");
     let row = {"name": ""};
     this.rows.push(row);
     console.log(this.rows);
  }

  public  tableNameChange(tableName: string) {
    console.log("Table Selection changed...", tableName);
    this.selectedTableName = tableName;
    this.templateService.columnNames(tableName)
    .subscribe((columns: any) => {
      this.colNames = columns.json();
    })
  } 
  public fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
       // let file: File = fileList[0];
        this.fileData = fileList[0];
        //this.fileData.append('uploadFile', file, file.name);
        // let headers = new Headers();
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        // this.http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
  }

  public createReport() {
    let reportObj = {
      table: this.selectedTableName,
      map: JSON.stringify(this.rows),
      name: this.templateName,
      startRow: this.startRow
    }
    this.templateService.postWithFile(reportObj, this.fileData)
    .subscribe((result: any) => {
      console.log("Report Created Successfully");
    })
  }

}

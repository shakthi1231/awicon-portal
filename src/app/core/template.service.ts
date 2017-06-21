import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { Headers } from '@angular/http';

@Injectable()
export class TemplateService {

  constructor(private httpMapper: HttpWrapperService) { 

  }

  public tableNames(): any {
     return this.httpMapper.get(`/api/templates`);
  }

  public columnNames(table: string): any {
     return this.httpMapper.get(`/api/column-names/${table}`);
  }

  public postWithFile(postData: any, file: File): any {
    console.log("In postWith File");
    
    let formData:FormData = new FormData();
    formData.append('files', file, file.name);
    
    if(postData !=="" && postData !== undefined && postData !==null){
      for (var property in postData) {
          if (postData.hasOwnProperty(property)) {
              console.log("Building formData...");
              console.log(property);
              console.log(postData[property]);
              formData.append(property, (postData[property]));
          }
      }
    }
    console.log("In postWithFile.......");
    console.log(formData);
    console.log("ndjkfnsufoudfgfodog");
    console.log(formData["map"]);

       let headers = new Headers();
        //  headers.append('Content-Type', 'multipart/form-data');
         headers.append('Accept', 'application/json');

    return this.httpMapper.post('/api/templates', formData, headers);
    // var returnReponse = new Promise((resolve, reject) => {
    //   this.http.post(this.constants.root_dir + url, formData, {
    //     headers: headers
    //   }).subscribe(
    //       res => {
    //         this.responseData = res.json();
    //         resolve(this.responseData);
    //       },
    //       error => {
    //         this.router.navigate(['/login']);
    //         reject(error);
    //       }
    //   );
    // });
    // return returnReponse;
  }


  // public createReport(report: any): any {
  //   //  let headerObj: any = {
  //   //    "Content-Type": 'multipart/form-data',
  //   //    "Accept": "application/json"
  //   //  }
  //    console.log("In createReport......");
  //    console.log(report);
     
  // }

}

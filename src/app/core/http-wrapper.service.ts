import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs, Response , Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";



@Injectable()
export class HttpWrapperService {
  private baseUrl: string;
  constructor(private http: Http) {
      this.baseUrl = "http://localhost:58893";
  }

  private appendBaseUrl(url) {
   console.log("appending base url for ", url);
   return this.baseUrl + url;
  }

  private generateHeaders(headerObj?: any) {
        const headers = new Headers();
        console.log(headerObj);
        if (headerObj) {
            console.log("taking keys");
        
            Object.keys(headerObj).forEach((key: any) => {
              console.log(key);
                headers[key] = headerObj[key];
           });
        }
        console.log("Printing Headers");
        console.log(headers);
        return headers;
  }

  private generateReqOptions(headers?: Headers) {
    return new RequestOptions({
      headers: this.generateHeaders(headers)
    });
  }

  

  public get(url: string, reqOptions?: RequestOptionsArgs): Observable<Response> {
    console.log("Get request for url:", url);
    return this.http.get(this.appendBaseUrl(url), this.generateReqOptions())
    .do((response) => {  // Check whether to use map or Do
    });
  }

  public post(url: string, body: any, headers?: Headers): Observable<Response> {
   console.log("Post request for url:", url);
   return this.http.post(this.appendBaseUrl(url), body, this.generateReqOptions(headers))
     .do((response) => {  
    });
  }

  public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
   console.log("Put request for url:", url);
   return this.http.put(this.appendBaseUrl(url), body, this.generateReqOptions())
    .do((response) => {  
    });

  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
   console.log("Delete request for url:", url);
   return this.http.delete(this.appendBaseUrl(url), this.generateReqOptions())
     .do((response) => {  
    });
  }

}

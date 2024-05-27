import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataLoggingCommonService {

  constructor(private http: HttpClient) { }
  
  getDataLog() : Observable<any>{
    const url = "https://randomuser.me/api/?results=1000"
    return this.http.get<any>(url);
  }

  public checkError() {
    return this.http.get(environment.app_url + "/data/checkError");
  }

  public updateErrorStatus() {
    return this.http.get(environment.app_url + "/data/updateErrorStatus");
  }
}

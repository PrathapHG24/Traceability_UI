import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userMangementService {

  constructor(private http: HttpClient) { }

  getUserData() : Observable<any>{
    const url = "https://randomuser.me/api/?results=1000"
    return this.http.get<any>(url);
  }


}

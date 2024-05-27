import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public host = environment.app_url;
  private token: any;
  private loggedInUser: any;
  private user: any;
  private jwtHelper = new JwtHelperService();
  private logInFlag: any;

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${this.host}/user/login`, user, {observe: 'response'});
  }

  public logOut(): void {
    this.token = null;
    this.loggedInUser = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  public addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalCache(): User {
    this.user = localStorage.getItem('user');
    return JSON.parse(this.user);
  }

  public loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  public getToken(): string {
    return this.token;
  }

  public isUserLoggedIn(): boolean {
    this.loadToken();
    if(this.token != null && this.token !== '') {
      if(this.jwtHelper.decodeToken(this.token).sub !== null || '') {
        if(!this.jwtHelper.isTokenExpired(this.token)) {
          this.loggedInUser = this.jwtHelper.decodeToken(this.token).sub;
          this.logInFlag = true;
        }
      }
    } else {
      this.logOut();
      this.logInFlag = false;
    }
    return this.logInFlag;
  }
}

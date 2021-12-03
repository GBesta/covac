import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { analyzeFileForInjectables } from '@angular/compiler';

export interface User{
  username: string;
  token: string;
  id : number;
}


@Injectable({
  providedIn: 'root',
})
export class UserService {

  public currentUserSubject = new BehaviorSubject<User>({username : "", token:"", id : 0});
  currentUser: User = {username : "", token:"", id : 0};
  url = 'http://127.0.0.1:8000';

  private httpWithoutInterceptor: HttpClient;

  constructor(
    handler: HttpBackend,
    private http: HttpClient,
  ) {
    this.httpWithoutInterceptor = new HttpClient(handler);
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
      this.setcurrentUserSubject(this.currentUser);
    }
  }

  setcurrentUserSubject(user: User): void {
    const originalToken = this.currentUser && this.currentUser.token;
    // if we have a token saved, keep it
    if (originalToken && !user.token) {
      user.token = originalToken;
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    this.currentUserSubject.next(user);
  }

  /**
   * Log in by sending a POST request containing username and password to the backend.
   */
   loginUser(username: string, password: string): Observable<User> {
    return this.httpWithoutInterceptor.post<User>(
      this.url + '/api/auth/', {
        username, password
      }).pipe(
      map((response: User) => {
        this.setcurrentUserSubject(response);
        return response;
    }),
    );
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    this.currentUser = {username : "", token:"", id : 0};
    this.setcurrentUserSubject({username : "", token: "", id : 0});
  }

  getUser(): User {
    return this.currentUser;
  }

  getToken(): string {
    return this.currentUser.token;
  }

  registerNewUser(userData:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/users/', userData)
  }
}

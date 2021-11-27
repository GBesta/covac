import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  registerNewUser(userData:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/users/', userData)
  }
  loginUser(userData:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/', userData)
  }
}

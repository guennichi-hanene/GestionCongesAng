import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ValidationErrors} from '@angular/forms';


const API_LOGIN = 'http://localhost:3000/user/login';
@Injectable({
  providedIn: 'root'
})
 


export class AuthService {
  link='http://localhost:3000/auth/signin'

  constructor(
    private http: HttpClient
  ) { }
  login(credentials: any){
      return this.http.post(this.link ,credentials );
    }
  logout() {
    localStorage.removeItem('token');
  }
  isAutheticated() {
    return !!localStorage.getItem('token');
  }

  findUserByEmail(value: any): Observable<ValidationErrors | null> {
    return new Observable<ValidationErrors | null>(
      (observer) => {
        setTimeout(
          () => {
            const date = new Date();
            if (date.getTime() % 2) {
              observer.next(null);
            } else {
              observer.next({userExists: true});
            }
          },
          1500
        );
      }
    );
  }
}








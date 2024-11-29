import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    return (
      this.http
        .post(API_URL + '/user/login', {
          userName: username,
          password,
        })
        //Serve para pegar ERROS que vierem desse serviço
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status >= 400 && error.status < 500) {
              alert('Email or password was wrong');
            } else if (error.status >= 500) {
              console.error('Internal Server Error:', error);
            }
            return throwError(() => error);
          })
        )
    );
  }
}

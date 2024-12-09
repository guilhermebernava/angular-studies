import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { TokenServices } from '../token/token-service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  constructor(private http: HttpClient, private tokenServices: TokenServices) {}

  authenticate(username: string, password: string): Observable<any> {
    return (
      this.http
        .post(
          API_URL + '/user/login',
          {
            userName: username,
            password,
          },
          { observe: 'response' }
        )
        .pipe(
          tap((res) => {
            const authToken = res.headers.get('x-access-token');
            this.tokenServices.setToken(authToken);
          })
        )
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

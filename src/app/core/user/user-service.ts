import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../entities/user';
import { TokenServices } from '../token/token-service';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  userName = '';

  constructor(private tokenService: TokenServices) {
    this.VerifiyTokenAndDecode();
  }

  private VerifiyTokenAndDecode() {
    var token = this.tokenService.getToken();

    if (token != null || token != undefined) {
      var user = jwtDecode(token) as User;
      this.userName = user.name;
      this.userSubject.next(user);
    }
  }

  getUser() {
    this.VerifiyTokenAndDecode();
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.existToken();
  }
}

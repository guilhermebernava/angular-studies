import { Injectable } from '@angular/core';

const TOKEN_ITEM_NAME: string = 'jwt_token';

@Injectable({
  providedIn: 'root',
})
export class TokenServices {
  setToken(token: string | null) {
    if (token == null) return;
    window.localStorage.setItem(TOKEN_ITEM_NAME, token);
  }

  existToken() {
    var token = window.localStorage.getItem(TOKEN_ITEM_NAME);
    return token != null;
  }

  getToken() {
    return window.localStorage.getItem(TOKEN_ITEM_NAME);
  }

  deleteToken() {
    window.localStorage.removeItem(TOKEN_ITEM_NAME);
  }
}

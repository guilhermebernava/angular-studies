import { Injectable } from '@angular/core';
import { UserService } from '../user/user-service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PhotoGuard implements CanActivate {
  constructor(private userServices: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    console.log(state.url);
    debugger;
    if (state.url.includes(this.userServices.userName) || state.url === '/')
      return true;
    this.router.navigate(['user', this.userServices.userName]);
    return false;
  }
}

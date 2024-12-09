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

// é uma classe que serve para proteger as rotas, para o usuario nn poder
// acessar qualquer rota de qualquer maneira
@Injectable({ providedIn: 'root' })
export class SignInGuard implements CanActivate {
  constructor(private userServices: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    // ele faz algumas validacoes, sendo que TRUE pode acessar a rota, e FALSE ele nao deixa acessar
    if (this.userServices.isLogged()) {
      console.log('redirecting logged user');
      this.router.navigate(['user', this.userServices.userName]);
      return false;
    }
    return true;
  }
}

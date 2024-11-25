import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from './photo/photo';
import { PhotoService } from './photo/photo.services';

@Injectable({ providedIn: 'root' })
//implementando o RESOLVE com o tipo de resultado do nosso servico
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //estamos pegando o parametro que vem na rota, para buscar as photos por nome do usuario
    const userName = route.params['username'];
    //e por fim estamos devolvendo o resultado do servico
    return this.service.getPhotoByUserPagination(userName, 1);
  }
}

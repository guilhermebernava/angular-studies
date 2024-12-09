import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from './photo/photo';
import { PhotoService } from './photo/photo.services';
import { UserService } from '../../core/user/user-service';

@Injectable({ providedIn: 'root' })
//implementando o RESOLVE com o tipo de resultado do nosso servico
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(
    private service: PhotoService,
    private userServices: UserService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //e por fim estamos devolvendo o resultado do servico
    return this.service.getPhotoByUserPagination(this.userServices.userName, 1);
  }
}

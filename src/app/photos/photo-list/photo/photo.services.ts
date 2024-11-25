import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../env';
import { Injectable } from '@angular/core';
import { Photo } from './photo';
//marca que essa classe vai ser injetada dentro do angular
@Injectable({ providedIn: 'root' })
export class PhotoService {
  //esta dizendo que http vai ser uma propriedade dessa classe
  constructor(private http: HttpClient) {}

  getPhotosByUser(userName: string) {
    return this.http.get<Photo[]>(
      environment.apiUrl + '/' + userName + '/photos'
    );
  }

  getPhotoByUserPagination(userName: string, page: number) {
    //adicionando parametro de paginacao
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<Photo[]>(
      environment.apiUrl + '/' + userName + '/photos',
      { params }
    );
  }
}

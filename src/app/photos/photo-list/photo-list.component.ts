import { Component, OnInit } from '@angular/core';
import { Photo } from './photo/photo';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from './photo/photo.services';

@Component({
  selector: 'app-photo-list',
  standalone: false,
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  hasMore: boolean = true;
  currentPage: number = 1;
  filter: string = '';
  userName: string = '';

  //fazendo INJECAO de dependencias
  constructor(
    //esta pegando as informacoes da rota atual
    private activatedRoute: ActivatedRoute,
    private photoSerivce: PhotoService
  ) {}

  //vai rodar toda vez que o componente for carregado
  ngOnInit(): void {
    //estamos buscando o resultado do nosso RESOLVER, atraves do snapshot da nossa rota
    //esse valor devera estar em photos pois definimos isso na parte de rotas
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.userName = this.activatedRoute.snapshot.params['username'];
  }

  loadMorePhotos() {
    this.photoSerivce
      .getPhotoByUserPagination(this.userName, this.currentPage++)
      .subscribe((photos) => {
        this.filter = '';
        console.log(photos);
        this.photos = this.photos.concat(photos);
        console.log(this.photos);
        if (!photos.length) this.hasMore = false;
        this.currentPage += 1;
      });
  }
}

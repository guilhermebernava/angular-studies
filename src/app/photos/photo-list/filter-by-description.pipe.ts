import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from './photo/photo';

//Dizendo que eh um pipe, e seu nome
@Pipe({ name: 'filterByDescription' })

//implementando o metodo que ele vai faze alguma coisa
export class FilterByDescription implements PipeTransform {
  //primeiro parametro e o que vem antes do PIPE no momento que ele eh usado
  //o segundo e os parametros que vem depois do : pos nome do pipe
  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter((p) =>
        p.description.toLowerCase().includes(descriptionQuery)
      );
    }
    return photos;
  }
}

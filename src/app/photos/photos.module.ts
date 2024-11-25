import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
  //VAI DIZER QUAIS COMPONENTES ESSE MODO VAI USAR
  declarations: [PhotoFormComponent],
  //IMPORTACAO OBRIGATORIA PELA DOCUMENTACAO DO ANGULAR, serve para trazer as diretivas do angular para o module.
  imports: [CommonModule, PhotoListModule],
  //QUAIS COMPONENTES PODERAO SER ACESSADOS A PARTIR DESSE MODULO
  exports: [PhotoListModule, PhotoFormComponent],
})
export class PhotosModule {}

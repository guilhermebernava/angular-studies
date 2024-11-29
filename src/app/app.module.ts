import { NgModule } from '@angular/core';
import { PhotosModule } from './photos/photos.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutesModule, routes } from './app.routes.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  //CHAMANDO OS MODULOS DE PHOTOS e BROWSER_MODULE que traz as diretivas padroes do angular
  imports: [BrowserModule, PhotosModule, AppRoutesModule, HomeModule],
  //configurando o HTTP_CLIENT para poder ser injetado nos componentes
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}

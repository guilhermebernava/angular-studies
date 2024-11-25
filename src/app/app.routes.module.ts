import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NgModule } from '@angular/core';
import { ErrorsModule } from './commons/errors/errors.module';
import { NotFoundComponent } from './commons/errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

//criando as rotas e qual componente vai ser usado quando acessar essa rota
export const routes: Routes = [
  {
    //estamos passando um parametro para essa rota
    path: 'user/:username',
    component: PhotoListComponent,
    resolve: {
      //criando um RESOLVER somente para propriedade PHOTOS
      photos: PhotoListResolver,
    },
  },
  {
    path: 'add',
    component: PhotoFormComponent,
  },
  //vai colocar esse componente para qualquer rota que nn for encontrada
  { path: '**', component: NotFoundComponent },
];

//importando ROUTER_MODULE que vai gerar as rotas
@NgModule({
  //vai registrar todas as rotas
  imports: [RouterModule.forRoot(routes), ErrorsModule],
  //precisa exportar pois, o componente que o angular usa para identificar as rotas vem desse modulo
  exports: [RouterModule],
})
export class AppRoutesModule {}

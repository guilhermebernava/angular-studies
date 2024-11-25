import { Component } from '@angular/core';

//DECORATOR que serve para transformar essa classe em um componente no angular
@Component({
  standalone: false,
  //serve para dizer qual vai ser o nome da TAG que vamos usar para chamar esse componente
  selector: 'app-root',
  //serve para importar coisas para serem usados dentro desse componente, inclusive outros componentes
  //e de fato o HTML que esse componente ira usar
  templateUrl: './app.component.html',
  //isso e o CSS que esse HTML esta usando
  styleUrl: './app.component.css',
})

//dizendo que o COMPONENTE DEVERA IMPLEMENTAR o ngOnInit
export class AppComponent {}

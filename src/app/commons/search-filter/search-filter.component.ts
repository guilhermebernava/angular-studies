import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  standalone: false,
  templateUrl: './search-filter.component.html',
})
export class SearchFilterComponent implements OnDestroy, OnInit {
  ngOnInit(): void {
    //Toda vez que esse SUBJECT for mandar o dado para SUBSCRIB
    //o meu componente vai gerar um EVENTO que pode ser pego por outro componente acessando ele defora
    //para ele pegar esse evento bastar usar o (onChange)
    this.debounce
      .pipe(debounceTime(400))
      .subscribe((val) => this.onChange.emit(val));
  }

  //criando um EVENTO que pode ser usado por outros componentes
  @Output() onChange = new EventEmitter<string>();
  @Input() value: string = '';

  //ele vai servir para conseguirmos criar um timer depois do usuario digitar, para que o filtro ocorra
  //para que o filtro nn sempre ocorrar depois que o usuario parou de digitar, mas sim depois de um tempo que escolhemos
  debounce: Subject<string> = new Subject<string>();

  ngOnDestroy(): void {
    //precisamos fechar esse DEBOUNCE no momento que sairmos do componente
    this.debounce.unsubscribe();
  }

  onKeyUp(event: KeyboardEvent) {
    //passando os valores para dentro do DEBOUNCE para conseguir criar um timer para consumir o PIPE de filtro de photos
    this.debounce.next((event.target as HTMLInputElement).value);
  }
}

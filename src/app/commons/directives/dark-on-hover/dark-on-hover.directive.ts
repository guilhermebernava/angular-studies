import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  //nome que precisamos colocar no componente
  selector: '[appDarkenOnHover]',
})
export class DarkenOnHoverDirective {
  //pegamos qual ELEMENTO que essa directive esta pegando
  //RENDERER 2 serve para fazer a alteracao no EL, que eh o elemento do DOM
  constructor(private el: ElementRef, private render: Renderer2) {}

  //podemos passar dados para o DIRECTIVE igual ao componente
  @Input() brightness: string = '75';

  //a partir do ElementRef, nos conseguimos saber se o mouse esta dentrou ou fora desse elemento
  @HostListener('mouseover')
  darkenOn() {
    //a partir dele conseguimos fazer a alteracao do ELEMENTO que o DIRECTIVE esta interagindo
    this.render.setStyle(
      this.el.nativeElement,
      'filter',
      `brightness(${this.brightness}%)`
    );
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}

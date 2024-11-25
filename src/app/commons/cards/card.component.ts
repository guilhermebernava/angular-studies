import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title: string = '';
}

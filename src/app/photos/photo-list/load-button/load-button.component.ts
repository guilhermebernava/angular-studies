import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrl: './load-button.component.css',
})
export class LoadButtonComponent {
  @Input() hasMore: boolean = false;
}

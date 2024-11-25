import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
})
export class PhotoComponent {
  //INPUT permite receber parametros via TAG
  @Input() src = '';
  @Input() alt = '';
}

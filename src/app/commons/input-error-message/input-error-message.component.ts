import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-error',
  standalone: false,
  templateUrl: './input-error-message.component.html',
})
export class InputErrorMessageComponent {
  @Input() formControlName: string = '';
  @Input() errorMessage: string = '';
  @Input() formGroup?: FormGroup;
}

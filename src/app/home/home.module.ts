import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorMessageModule } from '../commons/input-error-message/input-error-message.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputErrorMessageModule,
    RouterModule,
  ],
  exports: [SignInComponent],
})
export class HomeModule {}

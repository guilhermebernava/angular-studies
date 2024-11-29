import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServices } from '../../core/auth/auth-services';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PlatformDetectorService } from '../../core/plataform-detector/plataform-detector-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  //serve para fazer as validacoes no forms
  loginForm!: FormGroup;
  @ViewChild('usernameInput') userNameInput?: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authServices: AuthServices,
    //Isso vemdo app.routes.module que criamos para lidar com nossas rotas
    private router: Router,
    private plataformDetectorSerivce: PlatformDetectorService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      //sao as propriedades que precisamos colocar nos inputs
      //com o mesmo nome para conseguir validar elas no nosso componente.
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log('fazendo login.....');
    this.authServices
      .authenticate(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe({
        next: (result) => {
          // Sucesso: Navegar para outra URL
          this.router.navigate(['user', this.loginForm.get('username')?.value]);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Erro de autenticação:', error);
          this.loginForm.reset();
          this.plataformDetectorSerivce.isPlatformBrowser() &&
            this.userNameInput?.nativeElement.focus();
        },
      });
  }
}

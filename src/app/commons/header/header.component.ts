import { Component } from '@angular/core';
import { User } from '../../entities/user';
import { UserService } from '../../core/user/user-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header',
})
export class HeaderComponent {
  user$: Observable<User | null>;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}

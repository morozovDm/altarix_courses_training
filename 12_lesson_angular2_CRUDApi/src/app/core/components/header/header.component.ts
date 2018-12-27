import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HeaderService, Menu } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  authorized$ = this.authService.authStatus$;

  titleMenu: Menu[] = this.headerService.titleMenu;
  authMenu: Menu[] = this.headerService.authMenu;
  constructor(private headerService: HeaderService, private authService: AuthService, private router: Router) { }

}

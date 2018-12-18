import { Component } from '@angular/core';
import { HeaderService, Menu } from '../../services/header.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menu: Menu[] = this.headerService.menu;

  constructor(private headerService: HeaderService, private authService: AuthService, private router: Router) { }

}

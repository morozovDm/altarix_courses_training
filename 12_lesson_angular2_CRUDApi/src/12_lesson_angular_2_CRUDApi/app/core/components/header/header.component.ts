import { Component, OnInit } from '@angular/core';
import { HeaderService, Menu } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  menu: Menu[] = this.headerService.menu;

  ngOnInit() {
  }

}

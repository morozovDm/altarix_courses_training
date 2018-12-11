import { Component } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent {
  dates: Date[] = [new Date(1988,3, 15), new Date(1995,8,23), new Date()]
}

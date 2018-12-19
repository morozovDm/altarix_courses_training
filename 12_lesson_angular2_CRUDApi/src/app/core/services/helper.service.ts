import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goBack() {
    this.router.navigate(['/']);
  }
}

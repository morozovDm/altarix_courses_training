import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { partition } from 'rxjs/operators';

export const partitionByErrorCode = partition((error: any) => error.status !== undefined && error.status !== 200);

@Injectable({
  providedIn: 'root'
})

export class HelperService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goBack() {
    this.router.navigate(['/']);
  }
}

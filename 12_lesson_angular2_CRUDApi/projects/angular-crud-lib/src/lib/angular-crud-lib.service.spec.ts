import { TestBed } from '@angular/core/testing';

import { AngularCrudLibService } from './angular-crud-lib.service';

describe('AngularCrudLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularCrudLibService = TestBed.get(AngularCrudLibService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InputTypesService } from './input-types.service';

describe('InputTypesService', () => {
  let service: InputTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

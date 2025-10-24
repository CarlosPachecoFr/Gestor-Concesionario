import { TestBed } from '@angular/core/testing';

import { DatosCochesService } from './datos-coches.service';

describe('DatosCochesService', () => {
  let service: DatosCochesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosCochesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

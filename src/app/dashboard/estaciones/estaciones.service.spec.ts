import { TestBed, inject } from '@angular/core/testing';

import { EstacionesService } from './estaciones.service';

describe('EstacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstacionesService]
    });
  });

  it('should be created', inject([EstacionesService], (service: EstacionesService) => {
    expect(service).toBeTruthy();
  }));
});

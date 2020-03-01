import { TestBed } from '@angular/core/testing';

import { GeneraladminService } from './generaladmin.service';

describe('GeneraladminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneraladminService = TestBed.get(GeneraladminService);
    expect(service).toBeTruthy();
  });
});

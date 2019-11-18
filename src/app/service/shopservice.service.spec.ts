import { TestBed } from '@angular/core/testing';

import { ShopserviceService } from './shopservice.service';

describe('ShopserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopserviceService = TestBed.get(ShopserviceService);
    expect(service).toBeTruthy();
  });
});

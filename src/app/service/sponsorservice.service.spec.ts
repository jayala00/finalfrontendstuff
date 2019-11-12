import { TestBed } from '@angular/core/testing';

import { SponsorserviceService } from './sponsorservice.service';

describe('SponsorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SponsorserviceService = TestBed.get(SponsorserviceService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorviewsdriversComponent } from './sponsorviewsdrivers.component';

describe('SponsorviewsdriversComponent', () => {
  let component: SponsorviewsdriversComponent;
  let fixture: ComponentFixture<SponsorviewsdriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorviewsdriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorviewsdriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

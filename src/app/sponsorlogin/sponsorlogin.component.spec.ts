import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorloginComponent } from './sponsorlogin.component';

describe('SponsorloginComponent', () => {
  let component: SponsorloginComponent;
  let fixture: ComponentFixture<SponsorloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

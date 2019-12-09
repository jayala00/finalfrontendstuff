import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplySponsorComponent } from './apply-sponsor.component';

describe('ApplySponsorComponent', () => {
  let component: ApplySponsorComponent;
  let fixture: ComponentFixture<ApplySponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplySponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplySponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

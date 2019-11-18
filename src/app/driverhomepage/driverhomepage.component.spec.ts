import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverhomepageComponent } from './driverhomepage.component';

describe('DriverhomepageComponent', () => {
  let component: DriverhomepageComponent;
  let fixture: ComponentFixture<DriverhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

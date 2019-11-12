import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualloginComponent } from './actuallogin.component';

describe('ActualloginComponent', () => {
  let component: ActualloginComponent;
  let fixture: ComponentFixture<ActualloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

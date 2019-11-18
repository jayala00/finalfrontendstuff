import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedriveraccountComponent } from './managedriveraccount.component';

describe('ManagedriveraccountComponent', () => {
  let component: ManagedriveraccountComponent;
  let fixture: ComponentFixture<ManagedriveraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedriveraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedriveraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

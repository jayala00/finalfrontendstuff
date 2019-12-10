import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageadminaccountComponent } from './manageadminaccount.component';

describe('ManageadminaccountComponent', () => {
  let component: ManageadminaccountComponent;
  let fixture: ComponentFixture<ManageadminaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageadminaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageadminaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

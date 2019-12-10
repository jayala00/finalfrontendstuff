import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminpasswordComponent } from './editadminpassword.component';

describe('EditadminpasswordComponent', () => {
  let component: EditadminpasswordComponent;
  let fixture: ComponentFixture<EditadminpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditadminpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

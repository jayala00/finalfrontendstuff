import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminfirstnameComponent } from './editadminfirstname.component';

describe('EditadminfirstnameComponent', () => {
  let component: EditadminfirstnameComponent;
  let fixture: ComponentFixture<EditadminfirstnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditadminfirstnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminfirstnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminlastnameComponent } from './editadminlastname.component';

describe('EditadminlastnameComponent', () => {
  let component: EditadminlastnameComponent;
  let fixture: ComponentFixture<EditadminlastnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditadminlastnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminlastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

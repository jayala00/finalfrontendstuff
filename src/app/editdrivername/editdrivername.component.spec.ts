import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdrivernameComponent } from './editdrivername.component';

describe('EditdrivernameComponent', () => {
  let component: EditdrivernameComponent;
  let fixture: ComponentFixture<EditdrivernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdrivernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdrivernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

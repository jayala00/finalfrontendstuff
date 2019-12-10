import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminemailComponent } from './editadminemail.component';

describe('EditadminemailComponent', () => {
  let component: EditadminemailComponent;
  let fixture: ComponentFixture<EditadminemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditadminemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

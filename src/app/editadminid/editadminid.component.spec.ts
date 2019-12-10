import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminidComponent } from './editadminid.component';

describe('EditadminidComponent', () => {
  let component: EditadminidComponent;
  let fixture: ComponentFixture<EditadminidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditadminidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

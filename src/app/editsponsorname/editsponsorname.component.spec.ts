import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsponsornameComponent } from './editsponsorname.component';

describe('EditsponsornameComponent', () => {
  let component: EditsponsornameComponent;
  let fixture: ComponentFixture<EditsponsornameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsponsornameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsponsornameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

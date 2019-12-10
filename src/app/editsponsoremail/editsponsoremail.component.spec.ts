import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsponsoremailComponent } from './editsponsoremail.component';

describe('EditsponsoremailComponent', () => {
  let component: EditsponsoremailComponent;
  let fixture: ComponentFixture<EditsponsoremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsponsoremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsponsoremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

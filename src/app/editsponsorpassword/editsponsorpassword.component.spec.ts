import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsponsorpasswordComponent } from './editsponsorpassword.component';

describe('EditsponsorpasswordComponent', () => {
  let component: EditsponsorpasswordComponent;
  let fixture: ComponentFixture<EditsponsorpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsponsorpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsponsorpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

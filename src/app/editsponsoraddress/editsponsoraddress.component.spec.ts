import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsponsoraddressComponent } from './editsponsoraddress.component';

describe('EditsponsoraddressComponent', () => {
  let component: EditsponsoraddressComponent;
  let fixture: ComponentFixture<EditsponsoraddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsponsoraddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsponsoraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

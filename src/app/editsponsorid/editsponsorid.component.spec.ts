import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsponsoridComponent } from './editsponsorid.component';

describe('EditsponsoridComponent', () => {
  let component: EditsponsoridComponent;
  let fixture: ComponentFixture<EditsponsoridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsponsoridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsponsoridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

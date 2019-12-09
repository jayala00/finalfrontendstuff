import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdriverpasswordComponent } from './editdriverpassword.component';

describe('EditdriverpasswordComponent', () => {
  let component: EditdriverpasswordComponent;
  let fixture: ComponentFixture<EditdriverpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdriverpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdriverpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

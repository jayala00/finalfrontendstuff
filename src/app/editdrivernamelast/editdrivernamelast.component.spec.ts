import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdrivernamelastComponent } from './editdrivernamelast.component';

describe('EditdrivernamelastComponent', () => {
  let component: EditdrivernamelastComponent;
  let fixture: ComponentFixture<EditdrivernamelastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdrivernamelastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdrivernamelastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesponsoraccountComponent } from './managesponsoraccount.component';

describe('ManagesponsoraccountComponent', () => {
  let component: ManagesponsoraccountComponent;
  let fixture: ComponentFixture<ManagesponsoraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesponsoraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesponsoraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

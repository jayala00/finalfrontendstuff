import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesponsorComponent } from './createsponsor.component';

describe('CreatesponsorComponent', () => {
  let component: CreatesponsorComponent;
  let fixture: ComponentFixture<CreatesponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

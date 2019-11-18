import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorhomepageComponent } from './sponsorhomepage.component';

describe('SponsorhomepageComponent', () => {
  let component: SponsorhomepageComponent;
  let fixture: ComponentFixture<SponsorhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

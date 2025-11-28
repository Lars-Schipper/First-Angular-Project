import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileKeuzendeel } from './mobile-keuzendeel';

describe('MobileKeuzendeel', () => {
  let component: MobileKeuzendeel;
  let fixture: ComponentFixture<MobileKeuzendeel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileKeuzendeel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileKeuzendeel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

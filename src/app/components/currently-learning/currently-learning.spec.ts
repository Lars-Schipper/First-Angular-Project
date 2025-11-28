import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyLearning } from './currently-learning';

describe('CurrentlyLearning', () => {
  let component: CurrentlyLearning;
  let fixture: ComponentFixture<CurrentlyLearning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentlyLearning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlyLearning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

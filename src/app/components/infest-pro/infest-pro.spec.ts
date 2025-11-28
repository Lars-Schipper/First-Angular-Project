import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfestPro } from './infest-pro';

describe('InfestPro', () => {
  let component: InfestPro;
  let fixture: ComponentFixture<InfestPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfestPro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfestPro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

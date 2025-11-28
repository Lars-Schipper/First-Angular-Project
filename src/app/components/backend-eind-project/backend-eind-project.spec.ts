import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendEindProject } from './backend-eind-project';

describe('BackendEindProject', () => {
  let component: BackendEindProject;
  let fixture: ComponentFixture<BackendEindProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendEindProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendEindProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

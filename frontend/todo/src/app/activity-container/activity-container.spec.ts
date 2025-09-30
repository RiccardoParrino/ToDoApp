import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityContainer } from './activity-container';

describe('ActivityContainer', () => {
  let component: ActivityContainer;
  let fixture: ComponentFixture<ActivityContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

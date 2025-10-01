import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActivityModal } from './create-activity-modal';

describe('CreateActivityModal', () => {
  let component: CreateActivityModal;
  let fixture: ComponentFixture<CreateActivityModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateActivityModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateActivityModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

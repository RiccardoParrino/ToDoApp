import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityModal } from './update-activity-modal';

describe('UpdateActivityModal', () => {
  let component: UpdateActivityModal;
  let fixture: ComponentFixture<UpdateActivityModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateActivityModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateActivityModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

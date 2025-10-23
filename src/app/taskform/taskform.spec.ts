import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskform } from './taskform';

describe('Taskform', () => {
  let component: Taskform;
  let fixture: ComponentFixture<Taskform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taskform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taskform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

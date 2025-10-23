import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskfilter } from './taskfilter';

describe('Taskfilter', () => {
  let component: Taskfilter;
  let fixture: ComponentFixture<Taskfilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taskfilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taskfilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBestPracticeComponent } from './counter-best-practice.component';

describe('CounterBestPracticeComponent', () => {
  let component: CounterBestPracticeComponent;
  let fixture: ComponentFixture<CounterBestPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterBestPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterBestPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

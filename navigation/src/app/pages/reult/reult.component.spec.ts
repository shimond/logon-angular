import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReultComponent } from './reult.component';

describe('ReultComponent', () => {
  let component: ReultComponent;
  let fixture: ComponentFixture<ReultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

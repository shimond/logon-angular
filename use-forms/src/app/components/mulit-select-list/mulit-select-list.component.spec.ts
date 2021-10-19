import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulitSelectListComponent } from './mulit-select-list.component';

describe('MulitSelectListComponent', () => {
  let component: MulitSelectListComponent;
  let fixture: ComponentFixture<MulitSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulitSelectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulitSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFourDayComponent } from './get-four-day.component';

describe('GetFourDayComponent', () => {
  let component: GetFourDayComponent;
  let fixture: ComponentFixture<GetFourDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFourDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFourDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

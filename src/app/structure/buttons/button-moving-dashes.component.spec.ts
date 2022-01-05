import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonMovingDashesComponent } from './button-moving-dashes.component';

describe('ButtonMovingDashesComponent', () => {
  let component: ButtonMovingDashesComponent;
  let fixture: ComponentFixture<ButtonMovingDashesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonMovingDashesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMovingDashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

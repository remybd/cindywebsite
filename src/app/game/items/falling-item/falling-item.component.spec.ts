import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallingItemComponent } from './falling-item.component';

describe('FallingItemComponent', () => {
  let component: FallingItemComponent;
  let fixture: ComponentFixture<FallingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

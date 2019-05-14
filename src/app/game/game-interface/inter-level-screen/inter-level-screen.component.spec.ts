import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterLevelScreenComponent } from './inter-level-screen.component';

describe('InterLevelScreenComponent', () => {
  let component: InterLevelScreenComponent;
  let fixture: ComponentFixture<InterLevelScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterLevelScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterLevelScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

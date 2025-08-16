import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPostComponent } from './sc-post.component';

describe('ScPostComponent', () => {
  let component: ScPostComponent;
  let fixture: ComponentFixture<ScPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

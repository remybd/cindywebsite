import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPostContentComponent } from './sc-post-content.component';

describe('ScPostContentComponent', () => {
  let component: ScPostContentComponent;
  let fixture: ComponentFixture<ScPostContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScPostContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScPostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

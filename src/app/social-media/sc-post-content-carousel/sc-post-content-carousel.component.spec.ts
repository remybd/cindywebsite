import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPostContentCarouselComponent } from './sc-post-content-carousel.component';

describe('ScPostContentCarouselComponent', () => {
  let component: ScPostContentCarouselComponent;
  let fixture: ComponentFixture<ScPostContentCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScPostContentCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScPostContentCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

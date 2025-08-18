import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockVideoCommentComponent } from './block-video-comment.component';

describe('BlockVideoCommentComponent', () => {
  let component: BlockVideoCommentComponent;
  let fixture: ComponentFixture<BlockVideoCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockVideoCommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockVideoCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

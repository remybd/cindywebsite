import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockImageCommentComponent } from './block-image-comment.component';

describe('BlockImagecommentComponent', () => {
  let component: BlockImageCommentComponent;
  let fixture: ComponentFixture<BlockImageCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockImageCommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockImageCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

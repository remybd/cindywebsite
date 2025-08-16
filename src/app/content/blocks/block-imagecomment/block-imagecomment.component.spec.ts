import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockImagecommentComponent } from './block-imagecomment.component';

describe('BlockImagecommentComponent', () => {
  let component: BlockImagecommentComponent;
  let fixture: ComponentFixture<BlockImagecommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockImagecommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockImagecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

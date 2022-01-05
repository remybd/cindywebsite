import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockVideoComponent } from './block-video.component';

describe('BlockVideoComponent', () => {
  let component: BlockVideoComponent;
  let fixture: ComponentFixture<BlockVideoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

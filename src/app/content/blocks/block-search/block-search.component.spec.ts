import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockSearchComponent } from './block-search.component';

describe('BlockSearchComponent', () => {
  let component: BlockSearchComponent;
  let fixture: ComponentFixture<BlockSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

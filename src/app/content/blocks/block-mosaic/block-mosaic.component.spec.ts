import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMosaicComponent } from './block-mosaic.component';

describe('BlockSearchComponent', () => {
  let component: BlockMosaicComponent;
  let fixture: ComponentFixture<BlockMosaicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockMosaicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockMosaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

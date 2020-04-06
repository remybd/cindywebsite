import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockLegendComponent } from './block-legend.component';

describe('BlockLegendComponent', () => {
  let component: BlockLegendComponent;
  let fixture: ComponentFixture<BlockLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

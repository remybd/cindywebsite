import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPostDialogComponent } from './sc-post-dialog.component';

describe('ScPostDialogComponent', () => {
  let component: ScPostDialogComponent;
  let fixture: ComponentFixture<ScPostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScPostDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredContentListComponent } from './filtered-content-list.component';

describe('FilteredContentListComponent', () => {
  let component: FilteredContentListComponent;
  let fixture: ComponentFixture<FilteredContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredContentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

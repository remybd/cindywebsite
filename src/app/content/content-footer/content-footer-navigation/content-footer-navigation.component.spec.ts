import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFooterNavigationComponent } from './content-footer-navigation.component';

describe('ContentFooterNavigationComponent', () => {
  let component: ContentFooterNavigationComponent;
  let fixture: ComponentFixture<ContentFooterNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentFooterNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFooterNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

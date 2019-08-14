import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderWithLogoComponent } from './layout-header-with-logo.component';

describe('HeaderWithLogoComponent', () => {
  let component: LayoutHeaderWithLogoComponent;
  let fixture: ComponentFixture<LayoutHeaderWithLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutHeaderWithLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHeaderWithLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

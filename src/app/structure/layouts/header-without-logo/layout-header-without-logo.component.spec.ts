import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderWithoutLogoComponent } from './layout-header-without-logo.component';

describe('HeaderWithoutLogoComponent', () => {
  let component: LayoutHeaderWithoutLogoComponent;
  let fixture: ComponentFixture<LayoutHeaderWithoutLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutHeaderWithoutLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHeaderWithoutLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

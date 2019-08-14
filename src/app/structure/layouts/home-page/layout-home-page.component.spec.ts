import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHomePageComponent } from './layout-home-page.component';

describe('HeaderWithLogoComponent', () => {
  let component: LayoutHomePageComponent;
  let fixture: ComponentFixture<LayoutHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

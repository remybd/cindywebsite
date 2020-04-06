import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockCreationComponent } from './content-block-creation.component';

describe('ContentBlockCreationComponent', () => {
  let component: ContentBlockCreationComponent;
  let fixture: ComponentFixture<ContentBlockCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBlockCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBlockCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

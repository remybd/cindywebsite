import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockFormComponent } from './unlock-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('UnlockFormComponent', () => {
  let component: UnlockFormComponent;
  let fixture: ComponentFixture<UnlockFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

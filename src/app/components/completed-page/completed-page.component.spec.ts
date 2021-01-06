import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CompletedPageComponent} from './completed-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CompletedPageComponent', () => {
  let component: CompletedPageComponent;
  let fixture: ComponentFixture<CompletedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

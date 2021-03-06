import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CompletedPageComponent} from './completed-page.component';
import {TodoService} from '@shared/services/todo.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('CompletedPageComponent', () => {
  let component: CompletedPageComponent;
  let fixture: ComponentFixture<CompletedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedPageComponent],
      imports: [MatSnackBarModule],
      providers: [TodoService],
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaFieldExampleComponent } from './textarea-field-example.component';

describe('TextareaFieldExampleComponent', () => {
  let component: TextareaFieldExampleComponent;
  let fixture: ComponentFixture<TextareaFieldExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaFieldExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaFieldExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

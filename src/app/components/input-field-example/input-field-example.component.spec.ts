import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldExampleComponent } from './input-field-example.component';

describe('InputFieldExampleComponent', () => {
  let component: InputFieldExampleComponent;
  let fixture: ComponentFixture<InputFieldExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

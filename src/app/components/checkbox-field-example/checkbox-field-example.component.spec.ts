import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFieldExampleComponent } from './checkbox-field-example.component';

describe('CheckboxFieldExampleComponent', () => {
  let component: CheckboxFieldExampleComponent;
  let fixture: ComponentFixture<CheckboxFieldExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxFieldExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFieldExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

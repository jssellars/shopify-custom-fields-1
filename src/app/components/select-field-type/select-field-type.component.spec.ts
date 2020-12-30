import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFieldTypeComponent } from './select-field-type.component';

describe('SelectFieldTypeComponent', () => {
  let component: SelectFieldTypeComponent;
  let fixture: ComponentFixture<SelectFieldTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFieldTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFieldTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

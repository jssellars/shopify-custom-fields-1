import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFieldExampleComponent } from './select-field-example.component';

describe('SelectFieldExampleComponent', () => {
  let component: SelectFieldExampleComponent;
  let fixture: ComponentFixture<SelectFieldExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFieldExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFieldExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

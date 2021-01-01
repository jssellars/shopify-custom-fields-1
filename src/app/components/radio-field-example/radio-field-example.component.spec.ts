import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioFieldExampleComponent } from './radio-field-example.component';

describe('RadioFieldExampleComponent', () => {
  let component: RadioFieldExampleComponent;
  let fixture: ComponentFixture<RadioFieldExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioFieldExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioFieldExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

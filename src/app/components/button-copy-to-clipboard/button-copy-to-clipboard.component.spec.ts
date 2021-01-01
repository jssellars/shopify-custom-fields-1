import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCopyToClipboardComponent } from './button-copy-to-clipboard.component';

describe('ButtonCopyToClipboardComponent', () => {
  let component: ButtonCopyToClipboardComponent;
  let fixture: ComponentFixture<ButtonCopyToClipboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCopyToClipboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCopyToClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

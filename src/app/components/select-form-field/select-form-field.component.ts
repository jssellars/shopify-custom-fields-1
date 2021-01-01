import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-form-field',
  templateUrl: './select-form-field.component.html',
  styleUrls: ['./select-form-field.component.css']
})
export class SelectFormFieldComponent implements OnInit {
  formFields: string[] = ['input', 'textarea', 'select', 'checkbox', 'radio']
  selectedFormField!: string;

  @Output() setFormFieldEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  setFormField() {
    this.setFormFieldEvent.emit(this.selectedFormField)
  }
}

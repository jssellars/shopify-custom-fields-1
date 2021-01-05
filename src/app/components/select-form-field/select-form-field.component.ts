import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-form-field',
  templateUrl: './select-form-field.component.html',
  styleUrls: ['./select-form-field.component.css']
})
export class SelectFormFieldComponent implements OnInit {
  formFields: string[] = ['input', 'textarea', 'select']

  @Input() formField!: string;
  @Output() formFieldChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  setFormField(event: InputEvent): void {
    const element = event.currentTarget as HTMLInputElement
    
    this.formFieldChange.emit(element.value)
  }
}

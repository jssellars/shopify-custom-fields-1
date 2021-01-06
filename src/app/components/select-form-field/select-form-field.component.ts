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

  inputWrapperClass(value: string = 'input', first: boolean, last: boolean) {
    return {
      'bg-indigo-50 border-indigo-200 z-10': this.formField === value,
      'border-gray-200': this.formField !== value,
      'rounded-t-md': first,
      'rounded-b-md': last
    }
  }
}

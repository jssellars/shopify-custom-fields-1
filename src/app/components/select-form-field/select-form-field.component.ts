import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-form-field',
  templateUrl: './select-form-field.component.html',
})
export class SelectFormFieldComponent implements OnInit {
  formFields: string[] = ['input', 'textarea', 'select'];

  @Input() formField!: string;
  @Input() formName!: string;
  @Output() formFieldChange = new EventEmitter<string>();
  @Output() formNameChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  setFormField(event: InputEvent): void {
    const element = event.currentTarget as HTMLInputElement;

    this.formFieldChange.emit(element.value);
  }

  setFormName(event: InputEvent): void {
    const element = event.currentTarget as HTMLInputElement;

    this.formNameChange.emit(element.value);
  }

  inputWrapperClass(value: string = 'input', first: boolean, last: boolean): object {
    return {
      'bg-blue-50 border-blue-200 z-10': this.formField === value,
      'border-gray-200': this.formField !== value,
      'rounded-t-2xl': first,
      'rounded-b-2xl': last
    };
  }
}

import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormFieldsService } from 'src/app/services/form-fields.service';
import { FormField } from 'src/app/interfaces/form-field';
import { iif } from 'rxjs';

@Component({
  selector: 'app-select-form-field',
  templateUrl: './select-form-field.component.html',
})
export class SelectFormFieldComponent implements OnInit {
  @Input() formField!: string;
  @Input() formName!: string;

  @Output() formFieldChange = new EventEmitter<string>();
  @Output() formNameChange = new EventEmitter<string>();

  formFields!: FormField[];
  model: any = {};

  constructor(private formFieldsService: FormFieldsService) { }

  ngOnInit(): void {
    this.formFields = this.getFormFields();
  }

  setFormField(event: InputEvent): void {
    const element = event.currentTarget as HTMLInputElement;

    this.formFieldChange.emit(element.value);
  }

  setFormName(value: string): void {
    this.formNameChange.emit(value);
  }

  inputWrapperClass(value: string = 'input', first: boolean, last: boolean): object {
    return {
      'bg-blue-50 border-blue-200 z-10': this.formField === value,
      'border-gray-200': this.formField !== value,
      'rounded-t-2xl': first,
      'rounded-b-2xl': last
    };
  }

  private getFormFields(): FormField[] {
    return this.formFieldsService.getFormFields();
  }
}

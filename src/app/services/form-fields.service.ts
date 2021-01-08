import { Injectable } from '@angular/core'
import { FormFields } from '../../assets/data/form-fields.js'
import { FormField } from '../interfaces/form-field'

@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {

  constructor() { }

  getFormFields(): FormField[] {
    return FormFields
  }
 }

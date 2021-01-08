import { Injectable } from '@angular/core'
import { FormFields } from '../../assets/data/form-fields.js'

@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {

  constructor() { }

  getFormFields(): object[] {
    return FormFields
  }
 }

import { Injectable } from '@angular/core';
import { InputTypes } from '../../assets/data/input-types.js';

@Injectable({
  providedIn: 'root'
})
export class InputTypesService {
  constructor() { }

  getInputTypes(): string[] {
    return InputTypes;
  }
}

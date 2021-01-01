import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectFormFieldComponent } from './components/select-form-field/select-form-field.component';
import { InputFieldExampleComponent } from './components/input-field-example/input-field-example.component';
import { TextareaFieldExampleComponent } from './components/textarea-field-example/textarea-field-example.component';
import { SelectFieldExampleComponent } from './components/select-field-example/select-field-example.component';
import { CheckboxFieldExampleComponent } from './components/checkbox-field-example/checkbox-field-example.component';
import { RadioFieldExampleComponent } from './components/radio-field-example/radio-field-example.component';
import { ButtonCopyToClipboardComponent } from './components/button-copy-to-clipboard/button-copy-to-clipboard.component';
import { FormFieldExampleComponent } from './components/form-field-example/form-field-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectFormFieldComponent,
    InputFieldExampleComponent,
    TextareaFieldExampleComponent,
    SelectFieldExampleComponent,
    CheckboxFieldExampleComponent,
    RadioFieldExampleComponent,
    ButtonCopyToClipboardComponent,
    FormFieldExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

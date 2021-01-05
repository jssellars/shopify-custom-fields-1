import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectFormFieldComponent } from './components/select-form-field/select-form-field.component';
import { ButtonCopyToClipboardComponent } from './components/button-copy-to-clipboard/button-copy-to-clipboard.component';
import { FieldInputComponent } from './components/field-input/field-input.component';
import { FieldSelectComponent } from './components/field-select/field-select.component';
import { FieldTextareaComponent } from './components/field-textarea/field-textarea.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectFormFieldComponent,
    ButtonCopyToClipboardComponent,
    FieldInputComponent,
    FieldSelectComponent,
    FieldTextareaComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

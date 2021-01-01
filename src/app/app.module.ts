import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectFormFieldComponent } from './components/select-form-field/select-form-field.component';
import { InputFieldExampleComponent } from './components/input-field-example/input-field-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectFormFieldComponent,
    InputFieldExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectFieldTypeComponent } from './components/select-field-type/select-field-type.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectFieldTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

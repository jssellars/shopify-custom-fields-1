import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  formField = 'input';
  formName  = 'Example';

  setFormField(value: string): void {
    this.formField = value;
  }

  setFormName(value: string): void {
    this.formName = value;
  }
}

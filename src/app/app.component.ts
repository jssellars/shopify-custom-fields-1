import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopify Line Item Generator';

  formField: string = 'select';

  setFormField(value: string) {
    this.formField = value
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as formFieldData from '../../data/form-field-html.json'

@Component({
  selector: 'app-form-field-example',
  templateUrl: './form-field-example.component.html',
  styleUrls: ['./form-field-example.component.css']
})
export class FormFieldExampleComponent implements OnInit {
  @Input() formField!: string;

  formFieldData = (formFieldData as any).default
  inputHTML!: string;
  inputHTMLExample!: SafeHtml; // `!` ignores the strictPropertyInitialization rule

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
   this.inputHTML = this.formFieldData[this.formField]
   this.inputHTMLExample = this.sanitizer.bypassSecurityTrustHtml(this.inputHTML)
 }
}

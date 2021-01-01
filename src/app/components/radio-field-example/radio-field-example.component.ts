import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-radio-field-example',
  templateUrl: './radio-field-example.component.html',
  styleUrls: ['./radio-field-example.component.css']
})
export class RadioFieldExampleComponent implements OnInit {
  inputHTML: string = '<input id="your-name" type="radio" name="properties[Your name]">'
  inputHTMLExample!: SafeHtml; // `!` ignores the strictPropertyInitialization rule

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.inputHTMLExample = this.sanitizer.bypassSecurityTrustHtml(this.inputHTML)
  }
}

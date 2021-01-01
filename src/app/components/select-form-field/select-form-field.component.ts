import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-select-form-field',
  templateUrl: './select-form-field.component.html',
  styleUrls: ['./select-form-field.component.css']
})
export class SelectFormFieldComponent implements OnInit {

  formFields: string[] = ['input', 'textarea', 'select', 'checkbox', 'radio']
  selectedFormField: string = '';
  inputHtmlCode: string = '';

  // appending ! to the end of a variable
  // allows it to ignore strictPropertyInitialization
  selectedHtmlToRender!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void { }

  setInputHtmlCode(): void {
    if (this.selectedFormField === 'input') {
      this.inputHtmlCode = '<input id="your-name" type="text" name="properties[Your name]">'
    } else if (this.selectedFormField === 'textarea') {
      this.inputHtmlCode = '<textarea id="your-name" name="properties[Your name]"></textarea>'
    } else if (this.selectedFormField === 'checkbox') {
      this.inputHtmlCode = '<input id="your-name" type="checkbox" name="properties[Your name]">'
    } else if (this.selectedFormField === 'radio') {
      this.inputHtmlCode = '<input id="your-name" type="radio" name="properties[Your name]">'
    } else if (this.selectedFormField === 'select') {
      this.inputHtmlCode = `<select id="your-name" name="properties[Your name]">\n\t<option>USA</option>\n\t<option selected>Canada</option>\n\t<option>EU</option>\n</select>`
    }
  }

  updateHtmlCode() {
    this.selectedHtmlToRender = this.sanitizer.bypassSecurityTrustHtml(this.inputHtmlCode)
  }

  // you can pass multiple types like
  // HTMLTextAreaElement|HTMLSelectElement
  copyHtmlToClipboard(clipboardHtml: HTMLTextAreaElement) {
    clipboardHtml.select();
    document.execCommand("copy");
    clipboardHtml.setSelectionRange(0, 0);
  }
}

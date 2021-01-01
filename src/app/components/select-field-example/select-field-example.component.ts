import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-select-field-example',
  templateUrl: './select-field-example.component.html',
  styleUrls: ['./select-field-example.component.css']
})
export class SelectFieldExampleComponent implements OnInit {
  inputHTML: string = '<select id="your-name" name="properties[Your name]">\n\t<option>USA</option>\n\t<option selected>Canada</option>\n\t<option>EU</option>\n</select>'
  inputHTMLExample!: SafeHtml; // `!` ignores the strictPropertyInitialization rule

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.inputHTMLExample = this.sanitizer.bypassSecurityTrustHtml(this.inputHTML)
  }

  // passing multiple types HTMLTextAreaElement|HTMLSelectElement
  copyHtmlToClipboard(clipboardHtml: HTMLTextAreaElement) {
    clipboardHtml.select();
    document.execCommand("copy");
    clipboardHtml.setSelectionRange(0, 0);
  }
}

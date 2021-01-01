import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-textarea-field-example',
  templateUrl: './textarea-field-example.component.html',
  styleUrls: ['./textarea-field-example.component.css']
})
export class TextareaFieldExampleComponent implements OnInit {
  inputHTML: string = '<textarea id="your-name" name="properties[Your name]"></textarea>'
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

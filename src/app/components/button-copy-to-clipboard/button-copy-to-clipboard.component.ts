import { Component, Input, OnInit } from '@angular/core';
import PrettyHTML from 'format-string-to-html';

@Component({
  selector: 'app-button-copy-to-clipboard',
  templateUrl: './button-copy-to-clipboard.component.html',
})
export class ButtonCopyToClipboardComponent implements OnInit {
  @Input() inputHTML!: string;

  constructor() { }

  ngOnInit(): void { }

  public copyHTMLToClipboard(): void {
    const fakeInput = document.createElement('textarea');
    const htmlString = this.inputHTML.toString();
    const formattedHTML = new PrettyHTML(htmlString).format();

    if (formattedHTML) {
      fakeInput.innerHTML = formattedHTML;
      document.body.appendChild(fakeInput);
      fakeInput.select();
      document.execCommand('copy');
      document.body.removeChild(fakeInput);
    }
  }
}

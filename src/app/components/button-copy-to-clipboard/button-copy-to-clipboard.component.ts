import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-copy-to-clipboard',
  templateUrl: './button-copy-to-clipboard.component.html',
  styleUrls: ['./button-copy-to-clipboard.component.css']
})
export class ButtonCopyToClipboardComponent implements OnInit {
  @Input() inputHTML!: string;

  constructor() { }

  ngOnInit(): void {
  }

  copyHTMLToClipboard(clipboardHtml: HTMLTextAreaElement) {
    clipboardHtml.select();
    document.execCommand("copy");
    clipboardHtml.setSelectionRange(0, 0);
  }
}

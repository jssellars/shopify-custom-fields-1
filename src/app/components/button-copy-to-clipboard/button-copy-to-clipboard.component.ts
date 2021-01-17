import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-copy-to-clipboard',
  templateUrl: './button-copy-to-clipboard.component.html',
})
export class ButtonCopyToClipboardComponent implements OnInit {
  @Input() inputHTML!: string;

  constructor() { }

  ngOnInit(): void { }

  private prettyHTML(htmlString: string): string {
    const commentRegex = /(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g;
    const htmlTab = '\t';
    let htmlIndent = '';
    let htmlResult = '';

    if (htmlString) {
      htmlString = htmlString.replace(commentRegex, '');

      const htmlArray = htmlString.split(/>\s*</);

      for (const htmlElement of htmlArray) {
        if (htmlElement.match(/^\/\w/)) {
          htmlIndent = htmlIndent.substring(htmlTab.length);
        }

        htmlResult += `${htmlIndent}<${htmlElement}>\r\n`;

        if (htmlElement.match(/^<?\w[^>]*[^\/]$/) && !htmlElement.startsWith('input')) {
          htmlIndent += htmlTab;
        }
      }
    }

    return htmlResult.substring(1, htmlResult.length - 3);
  }

  public copyHTMLToClipboard(): void {
    const fakeInput = document.createElement('textarea');
    const htmlString = this.inputHTML.toString();
    const formattedHTML = this.prettyHTML(htmlString);

    if (formattedHTML) {
      fakeInput.innerHTML = formattedHTML;
      document.body.appendChild(fakeInput);
      fakeInput.select();
      document.execCommand('copy');
      document.body.removeChild(fakeInput);
    }
  }
}

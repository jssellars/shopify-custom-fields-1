import { Component, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FieldSelectComponent implements OnInit {
  @ViewChild('htmlToCopy') htmlToCopy!: ElementRef;
  @Input() formName!: string;

  selectOptions: string[] = ['USA', 'Canada'];
  elementHTML!: string;
  model: any = { };

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getElementHTML();
  }

  removeOption(index: number): void {
    if (this.selectOptions) {
      this.selectOptions.splice(index, 1);
    }

    this.getElementHTML();
  }

  addOption(element: HTMLInputElement): void {
    this.selectOptions.push(element.value);
    element.value = '';

    this.getElementHTML();
  }

  getElementHTML(): void {
    this.changeDetector.detectChanges();

    const commentRegex = /(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g;

    if (this.htmlToCopy.nativeElement) {
      this.elementHTML = this.htmlToCopy.nativeElement.outerHTML.replace(commentRegex, '');
    }
  }
}

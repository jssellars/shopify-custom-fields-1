import { Component, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldSelectComponent implements OnChanges {
  @ViewChild('selectField') selectField!: ElementRef;
  @Input() formName!: string;

  selectOptions: string[] = ['USA', 'Canada'];
  elementHTML!: string;
  elementType = 'select'

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnChanges(): void {
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

  private getElementHTML(): void {
    this.changeDetector.detectChanges();

    const commentRegex = /(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g;

    if (this.selectField.nativeElement) {
      this.elementHTML = this.selectField.nativeElement.outerHTML.replace(commentRegex, '');
    }
  }
}

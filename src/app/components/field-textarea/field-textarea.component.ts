import { Component, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-field-textarea',
  templateUrl: './field-textarea.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FieldTextareaComponent implements OnChanges {
  @ViewChild('htmlToCopy') htmlToCopy!: ElementRef;
  @Input() formName!: string;

  elementHTML!: string;
  rowSizes: number[] = [2, 3, 4, 5, 6];
  rowSize = 4;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnChanges(): void {
    this.getElementHTML();
  }

  private getElementHTML(): void {
    this.changeDetector.detectChanges();

    if (this.htmlToCopy.nativeElement) {
      this.elementHTML = this.htmlToCopy.nativeElement.outerHTML;
    }
  }
}

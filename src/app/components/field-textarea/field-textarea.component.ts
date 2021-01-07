import { Component, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-field-textarea',
  templateUrl: './field-textarea.component.html',
  styleUrls: ['./field-textarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldTextareaComponent implements OnChanges {
  @ViewChild('textareaField') textareaField!: ElementRef;
  @Input() formName!: string;

  elementHTML!: string;
  rowSizes: number[] = [2, 3, 4, 5, 6];
  rowSize = 4;
  elementType = 'textarea'

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnChanges(): void {
    this.getElementHTML();
  }

  private getElementHTML(): void {
    this.changeDetector.detectChanges();

    if (this.textareaField.nativeElement) {
      this.elementHTML = this.textareaField.nativeElement.outerHTML;
    }
  }
}

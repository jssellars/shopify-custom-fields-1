import { Component, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FieldInputComponent implements OnChanges {
  @ViewChild('htmlToCopy') htmlToCopy!: ElementRef;
  @Input() formName!: string;

  elementType = 'text';
  elementTypes: string[] = ['text', 'checkbox', 'radio'];
  elementHTML!: string;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnChanges(): void {
    this.getElementHTML();
  }

  elementTypeChange(): void {
    this.getElementHTML();
  }

  inputLabelClass(value: string = 'text'): object {
    return {
      'bg-blue-100 text-blue-700': this.elementType === value,
      'bg-gray-100 text-gray-700': this.elementType !== value,
    };
  }

  private getElementHTML(): void {
    this.changeDetector.detectChanges();

    if (this.htmlToCopy.nativeElement) {
      this.elementHTML = this.htmlToCopy.nativeElement.outerHTML;
    }
  }
}

import { Component, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FieldInputComponent implements OnChanges {
  @ViewChild('inputField') inputField!: ElementRef;
  @Input() formName!: string;

  elementType = 'text';
  elementTypes: string[] = ['text', 'checkbox', 'radio'];
  elementHTML!: string;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnChanges(): void {
    this.getElementHTML();
  }

  elementTypeChange(): void {
    this.getElementHTML()
  }

  inputLabelClass(value: string = 'text'): object {
    return {
      'bg-indigo-100 text-indigo-700': this.elementType === value,
      'bg-gray-100 text-gray-700': this.elementType !== value,
    }
  }

  private getElementHTML(): void {
    this.changeDetector.detectChanges();

    if (this.inputField.nativeElement) {
      this.elementHTML = this.inputField.nativeElement.outerHTML;
    }
  }
}

import { Component, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.css'],
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

  private getElementHTML(): void {
    this.changeDetector.detectChanges();

    if (this.inputField.nativeElement) {
      this.elementHTML = this.inputField.nativeElement.outerHTML;
    }
  }
}

import { Component, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-textarea',
  templateUrl: './field-textarea.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FieldTextareaComponent implements OnInit {
  @ViewChild('htmlToCopy') htmlToCopy!: ElementRef;
  @Input() formName!: string;

  elementHTML!: string;
  rowSizes: number[] = [2, 3, 4, 5, 6];
  rowSize = 4;

  ngOnInit(): void {
    this.getElementHTML();
   }

  constructor(private changeDetector: ChangeDetectorRef) { }

  getElementHTML(): void {
    this.changeDetector.detectChanges();

    if (this.htmlToCopy.nativeElement) {
      this.elementHTML = this.htmlToCopy.nativeElement.outerHTML;
    }
  }
}

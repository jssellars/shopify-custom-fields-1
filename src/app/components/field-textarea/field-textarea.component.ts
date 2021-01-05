import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-field-textarea',
  templateUrl: './field-textarea.component.html',
  styleUrls: ['./field-textarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldTextareaComponent implements OnInit {
  @ViewChild('textareaField') textareaField!: ElementRef;

  propertyName: string = 'Example'
  elementHTML!: string;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getElementHTML()
  }

  getElementHTML(): void {
    this.changeDetector.detectChanges()

    if(this.textareaField.nativeElement) {
      this.elementHTML = this.textareaField.nativeElement.outerHTML
    }
  }
}

import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getElementHTML()
  }

  getElementHTML(): void {
    if(this.textareaField.nativeElement) {
      setTimeout(() => {
        this.elementHTML = this.textareaField.nativeElement.outerHTML
      }, 50)
    }
  }

}

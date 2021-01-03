import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldInputComponent implements OnInit {
  @ViewChild('inputField') inputField!: ElementRef

  elementTypes: string[] = ['text', 'checkbox', 'radio']
  elementType: string = 'text'
  propertyName: string = 'Example'
  elementHTML!: string

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getElementHTML()
  }

  getElementHTML(): void {
    if(this.inputField.nativeElement) {
      setTimeout(() => {
        this.elementHTML = this.inputField.nativeElement.outerHTML
      }, 50)
    }
  }

}

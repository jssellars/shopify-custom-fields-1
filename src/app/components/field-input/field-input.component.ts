import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

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

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getElementHTML()
  }

  getElementHTML(): void {
    this.changeDetector.detectChanges()
    
    if(this.inputField.nativeElement) {
      this.elementHTML = this.inputField.nativeElement.outerHTML
    }
  }
}

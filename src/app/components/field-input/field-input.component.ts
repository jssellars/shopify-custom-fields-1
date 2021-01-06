import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldInputComponent implements OnInit {
  @ViewChild('inputField') inputField!: ElementRef
  @Input() formName!: string;

  elementTypes: string[] = ['text', 'checkbox', 'radio']
  elementType: string = 'text'
  elementHTML!: string

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getElementHTML()
  }

  ngOnChanges(): void {
    this.getElementHTML()
  }

  private getElementHTML(): void {
    this.changeDetector.detectChanges()
    
    if(this.inputField.nativeElement) {
      this.elementHTML = this.inputField.nativeElement.outerHTML
    }
  }
}

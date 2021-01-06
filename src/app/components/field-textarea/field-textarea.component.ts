import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-field-textarea',
  templateUrl: './field-textarea.component.html',
  styleUrls: ['./field-textarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldTextareaComponent implements OnInit {
  @ViewChild('textareaField') textareaField!: ElementRef;
  @Input() formName!: string;

  elementHTML!: string;

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

    if(this.textareaField.nativeElement) {
      this.elementHTML = this.textareaField.nativeElement.outerHTML
    }
  }
}

import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldSelectComponent implements OnInit {
  @ViewChild('selectField') selectField!: ElementRef;
  @Input() formName!: string;

  selectOptions: string[] = ['USA', 'Canada']
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

  removeOption(index: number) {
    if(this.selectOptions) {
      this.selectOptions.splice(index, 1)
    }

    this.getElementHTML()
  }

  addOption(element: HTMLInputElement) {
    this.selectOptions.push(element.value)
    element.value = ''  

    this.getElementHTML()
  }

  private getElementHTML(): void {
    this.changeDetector.detectChanges()

    const commentRegex = /(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g
    
    if(this.selectField.nativeElement) {
      this.elementHTML = this.selectField.nativeElement.outerHTML.replace(commentRegex, "")
    }
  }
}

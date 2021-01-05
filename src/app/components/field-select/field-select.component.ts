import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldSelectComponent implements OnInit {
  @ViewChild('selectField') selectField!: ElementRef;

  propertyName: string = 'Example'
  selectOptions: string[] = ['USA', 'Canada']
  elementHTML!: string;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getElementHTML()
  }

  getElementHTML(): void {
    this.changeDetector.detectChanges()

    const commentRegex = /(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g
    
    if(this.selectField.nativeElement) {
      this.elementHTML = this.selectField.nativeElement.outerHTML.replace(commentRegex, "")
    }
  }

  removeOption(index: number) {
    if(this.selectOptions) {
      this.selectOptions.splice(index, 1)
    }
  }

  addOption(element: HTMLInputElement) {
    this.selectOptions.push(element.value)
    element.value = ''  
  }
}

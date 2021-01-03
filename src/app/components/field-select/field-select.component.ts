import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getElementHTML()
  }

  getElementHTML(): void {
    const commentRegex = /(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g
    
    if(this.selectField.nativeElement) {
      setTimeout(() => {
        let elementHTML = this.selectField.nativeElement.outerHTML
        this.elementHTML = elementHTML.replace(commentRegex, "")
      }, 50)
    }
  }

  removeOption(index: number) {
    if(this.selectOptions) {
      this.selectOptions.splice(index, 1)
    }
  }

  addOption(element: HTMLInputElement) {
    this.selectOptions.push(element.value)
  }

}

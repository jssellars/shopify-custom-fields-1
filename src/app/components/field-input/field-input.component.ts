import { Component, ViewChild, ElementRef, ViewEncapsulation, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { InputTypesService } from 'src/app/services/input-types.service';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FieldInputComponent implements OnInit {
  @ViewChild('htmlToCopy') htmlToCopy!: ElementRef;
  @Input() formName!: string;

  elementType = 'text';
  elementHTML!: string;
  inputTypes!: string[];
  inputDescription!: string;

  constructor(private changeDetector: ChangeDetectorRef, private inputTypesService: InputTypesService) { }

  ngOnInit(): void {
    this.getInputTypes();
  }

  ngOnChanges(): void {
    this.getElementHTML();
  }

  inputLabelClass(value: string = 'text'): object {
    return {
      'bg-blue-100 text-blue-700': this.elementType === value,
      'bg-gray-100 text-gray-700': this.elementType !== value,
    };
  }

  private getElementHTML(): void {
    this.changeDetector.detectChanges();

    if (this.htmlToCopy.nativeElement) {
      this.elementHTML = this.htmlToCopy.nativeElement.outerHTML;
    }
  }

  private getInputTypes(): void {
    this.inputTypes = this.inputTypesService.getInputTypes();
  }
}

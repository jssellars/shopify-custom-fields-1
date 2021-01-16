import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html'
})
export class FormErrorComponent implements OnInit {
  @Input() hasError!: boolean;
  @Input() errorMessage!: string;

  constructor() {}

  ngOnInit(): void { }
}

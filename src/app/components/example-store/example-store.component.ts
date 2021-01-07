import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-store',
  templateUrl: './example-store.component.html',
  styleUrls: ['./example-store.component.css']
})
export class ExampleStoreComponent implements OnInit {
  @Input() elementType!: string;
  @Input() selectOptions!: string[];
  @Input() rowSize!: number;

  exampleSizes: string[] = ['XS', 'S', 'M', 'L', 'XL']

  constructor() { }

  ngOnInit(): void {
  }
}

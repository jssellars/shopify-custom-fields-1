import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleStoreComponent } from './example-store.component';

describe('ExampleStoreComponent', () => {
  let component: ExampleStoreComponent;
  let fixture: ComponentFixture<ExampleStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

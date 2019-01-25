import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsParentsComponent } from './products_parents.component';

describe('ProductsParentsComponent', () => {
  let component: ProductsParentsComponent;
  let fixture: ComponentFixture<ProductsParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

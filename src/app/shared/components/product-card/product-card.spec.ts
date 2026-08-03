import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ProductCardComponent } from './product-card';
import { MaterialModule } from '../../material/material.module';

describe('ProductCardComponent', () => {

  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [
        ProductCardComponent
      ],

      imports: [
        MaterialModule,
        NoopAnimationsModule
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);

    component = fixture.componentInstance;

    component.product = {
      id: 1,
      name: 'Laptop',
      productCode: 'PRD001',
      category: 'Electronics',
      supplier: 'Dell',
      price: 50000,
      quantity: 5
    };

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});
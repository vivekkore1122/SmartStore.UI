import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AddProduct } from './add-product';
import { MaterialModule } from '../../../shared/material/material.module';

describe('AddProduct', () => {

  let component: AddProduct;
  let fixture: ComponentFixture<AddProduct>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [
        AddProduct
      ],

      imports: [

        ReactiveFormsModule,
        RouterTestingModule,
        MaterialModule,
        NoopAnimationsModule

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(AddProduct);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});
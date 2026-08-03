import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { Products } from './products';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card';

describe('Products', () => {

  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [
        Products,
        ProductCardComponent
      ],

      imports: [
        RouterTestingModule
      ],

      providers: [

        provideMockStore({

          initialState: {

            products: {

              products: [],

              loading: false

            }

          }

        })

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(Products);

    component = fixture.componentInstance;

    component.products$ = of([]);

    component.loading$ = of(false);

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});
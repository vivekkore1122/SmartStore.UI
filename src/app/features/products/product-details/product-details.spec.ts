import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductDetails } from './product-details';

describe('ProductDetails', () => {

  let component: ProductDetails;
  let fixture: ComponentFixture<ProductDetails>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [
        ProductDetails
      ],

      imports: [
        HttpClientTestingModule
      ],

      providers: [

        {
          provide: ActivatedRoute,
          useValue: {

            snapshot: {

              paramMap: {

                get: () => '1'

              }

            }

          }

        }

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetails);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});
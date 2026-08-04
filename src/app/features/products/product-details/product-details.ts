import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

  product?: Product;
  qrData = '';
  @ViewChild('qrContainer')
  qrContainer!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService

  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe({
      next: (response: Product | undefined) => {

        if (!response) {
          return;
        }

        this.product = response;

        this.qrData = `
        Product ID : ${this.product.id}
        Product Name : ${this.product.name}
        Product Code : ${this.product.productCode}
        Category : ${this.product.category}
        Supplier : ${this.product.supplier}
        Price : ₹${this.product.price}
        Quantity : ${this.product.quantity}
        `;

      },

      error: (error) => {
        console.error('Error loading product:', error);
      }
    });
  }

  downloadPNG(): void {

  html2canvas(this.qrContainer.nativeElement).then(canvas => {

    const link = document.createElement('a');

    link.download = 'Product-QR.png';

    link.href = canvas.toDataURL('image/png');

    link.click();

  });

}

}

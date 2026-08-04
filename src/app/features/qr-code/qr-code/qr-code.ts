import { Component } from '@angular/core';


@Component({
  selector: 'app-qr-code',
  standalone: false,
  templateUrl: './qr-code.html',
  styleUrls: ['./qr-code.css']
})
export class QrCode {

  qrData = `Product ID : 101
Product Name : Dell Laptop
Price : ₹55,000
Category : Electronics`;

}
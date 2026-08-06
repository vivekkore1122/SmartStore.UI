import { Component } from '@angular/core';

@Component({
  selector: 'app-about-smartstore',
  standalone: false,
  templateUrl: './about-smartstore.html',
  styleUrl: './about-smartstore.css'
})
export class AboutSmartStore {

  company = {

    name: 'Zest India Pvt. Ltd.',

    product: 'SmartStore',

    version: '1.0',

    description:
      'SmartStore is a modern inventory management solution designed to simplify product, category and inventory operations for organizations.',

    mission:
      'Deliver secure, scalable and user-friendly enterprise software solutions using modern web technologies.',

    address: 'Pune, Maharashtra, India',

    email: 'info@zestindia.com',

    phone: '+91 XXXXX XXXXX',

    website: 'https://www.zestindiait.com/'

  };

  technologies = [

    'Angular 20',

    'NgRx',

    'Angular Material',

    'Bootstrap',

    'TypeScript',

    'RxJS',

    'REST API'

  ];

  features = [

    'Dashboard',

    'Authentication',

    'Product Management',

    'Category Management',

    'Localization',

    'Responsive UI',

    'State Management'

  ];

  qrData = this.company.website;

}
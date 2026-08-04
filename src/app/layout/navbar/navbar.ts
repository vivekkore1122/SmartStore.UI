import { Component, EventEmitter, Output } from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar {
  constructor(private authService: AuthService,private translate: TranslateService) {
  this.translate.setDefaultLang('en');
  this.translate.use(this.currentLanguage);
  }
  
  currentLanguage = 'en';

  changeLanguage(language: string): void {
  this.currentLanguage = language;  
  this.translate.use(language);
  
  }

  @Output()
  toggleSidebar = new EventEmitter<void>();

  userName: string = '';

  isLoggedIn: boolean = false;
  

  ngOnInit(): void {

    console.log(this.authService.getUser());

    console.log(this.authService.isLoggedIn());

  const user = this.authService.getUser();

    if (user) {

      this.userName = user.name;

      this.isLoggedIn = true;

    }

  }

  logout(): void {

    this.authService.logout();

    location.href = '/login';

  }

}
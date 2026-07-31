import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { User } from '../models/user.model';
import { AuthConstants } from '../constants/auth.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(request: LoginRequest): Observable<LoginResponse> {

    if (
      request.email === 'admin@smartstore.com' &&
      request.password === 'Admin@123'
    ) {

      return of({

        token: 'mock-jwt-token-123456',

        user: {

          id: 1,

          name: 'System Administrator',

          email: request.email,

          role: 'Admin'

        }

      });

    }

    return throwError(() =>
      new Error('Invalid email or password')
    );

  }

  setToken(token: string): void {

    localStorage.setItem(
      AuthConstants.TOKEN_KEY,
      token
    );

  }

  getToken(): string | null {

    return localStorage.getItem(
      AuthConstants.TOKEN_KEY
    );

  }

  setUser(user: User): void {

    localStorage.setItem(
      AuthConstants.USER_KEY,
      JSON.stringify(user)
    );

  }

  getUser(): User | null {

    const user = localStorage.getItem(
      AuthConstants.USER_KEY
    );

    return user ? JSON.parse(user) : null;

  }

  isLoggedIn(): boolean {

    return !!this.getToken();

  }

  logout(): void {

    localStorage.removeItem(
      AuthConstants.TOKEN_KEY
    );

    localStorage.removeItem(
      AuthConstants.USER_KEY
    );

  }

}
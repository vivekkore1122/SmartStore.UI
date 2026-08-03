import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { Login } from './login';
import { AuthService } from '../../../core/services/auth.service';
import { MaterialModule } from '../../../shared/material/material.module';

class MockAuthService {

    login() {
        return of({
            token: 'mock-jwt-token-123456',
            user: {
                id: 1,
                name: 'System Administrator',
                email: 'admin@smartstore.com',
                role: 'Admin'
            }
        });
    }

    setToken() { }

    setUser() { }

}

describe('Login Component', () => {

    let component: Login;
    let fixture: ComponentFixture<Login>;

    let authService: AuthService;
    let router: Router;

    beforeEach(async () => {

        await TestBed.configureTestingModule({

            declarations: [
                Login
            ],

            imports: [
                ReactiveFormsModule,
                RouterTestingModule,
                MaterialModule
            ],

            providers: [

                {
                    provide: AuthService,
                    useClass: MockAuthService
                }

            ]

        }).compileComponents();

        fixture = TestBed.createComponent(Login);

        component = fixture.componentInstance;

        authService = TestBed.inject(AuthService);

        router = TestBed.inject(Router);

        fixture.detectChanges();

    });

    it('should create the component', () => {

        expect(component).toBeTruthy();

    });

    it('should create login form', () => {

        expect(component.loginForm).toBeTruthy();

    });

    it('should have empty form initially', () => {

        expect(component.loginForm.value).toEqual({

            email: '',

            password: ''

        });

    });

    it('should make email required', () => {

        const email = component.loginForm.controls['email'];

        email.setValue('');

        expect(email.valid).toBeFalse();

    });

    it('should validate email format', () => {

        const email = component.loginForm.controls['email'];

        email.setValue('vivek');

        expect(email.valid).toBeFalse();

    });

    it('should require password', () => {

        const password = component.loginForm.controls['password'];

        password.setValue('');

        expect(password.valid).toBeFalse();

    });

    it('should require minimum password length', () => {

        const password = component.loginForm.controls['password'];

        password.setValue('123');

        expect(password.valid).toBeFalse();

    });

    it('should make form valid', () => {

        component.loginForm.setValue({

            email: 'admin@smartstore.com',

            password: 'Admin@123'

        });

        expect(component.loginForm.valid).toBeTrue();

    });

    it('should call login service', () => {

        spyOn(authService, 'login').and.callThrough();

        spyOn(router, 'navigate')
            .and.returnValue(Promise.resolve(true));

        component.loginForm.setValue({

            email: 'admin@smartstore.com',

            password: 'Admin@123'

        });

        component.login();

        expect(authService.login).toHaveBeenCalled();

    });

    it('should navigate to dashboard after successful login', () => {

        spyOn(authService, 'login').and.callThrough();

        spyOn(authService, 'setToken');

        spyOn(authService, 'setUser');

        spyOn(router, 'navigate')
            .and.returnValue(Promise.resolve(true));

        component.loginForm.setValue({

            email: 'admin@smartstore.com',

            password: 'Admin@123'

        });

        component.login();

        expect(authService.setToken).toHaveBeenCalled();

        expect(authService.setUser).toHaveBeenCalled();

        expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);

    });

});
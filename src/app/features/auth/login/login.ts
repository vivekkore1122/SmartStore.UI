import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }


  loginForm!: FormGroup;

  login(): void {

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({

      next: (response) => {

        this.authService.setToken(response.token);

        this.authService.setUser(response.user);

        this.router.navigate(['/dashboard']);

      },

      error: (error) => {

        alert(error.message);

      }

    });

  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    });

  }

}

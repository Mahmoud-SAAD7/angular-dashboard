import { Component } from '@angular/core';
import { AuthService } from '../../services/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// import router
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  onLogin(LoginForm: FormGroup): void {
    this.authService.login(LoginForm.value.email, LoginForm.value.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.authService.getProfile().subscribe((profile) => {
        if (profile.role === 'admin') {
        
          this.router.navigate(['/']).then(() => {
      
            window.location.reload();
          });
        } else {
    
          alert('You are not an admin');
        }
      });
    });
    console.log(LoginForm.value);
  }
}

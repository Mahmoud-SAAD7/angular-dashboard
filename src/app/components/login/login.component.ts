import { Component } from '@angular/core';
import { AuthService } from '../../services/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import router
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.authService.getProfile().subscribe((profile) => {
        if (profile.role === 'admin') {
          // Navigate to admin dashboard or home page
          this.router.navigate(['/']).then(() => {
            // After navigation is complete, reload the page
            window.location.reload();
          });
        } else {
          // Handle non-admin users
          // show error message
          alert('You are not an admin');
        }
      });
    });
  }
}

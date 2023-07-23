import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}
  onSignupSuccess() {
    this.navigateToLogin();
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  async onSubmit() {
    if (!this.name || !this.email || !this.password) {
      alert('All fields are required');
      return;
    }

    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    // console.log(userData);
    try {
      const response = await this.http
        .post<any>('https://talkgpt-jddq.onrender.com/register', userData)
        .toPromise();
      alert(response.message);
      if (response) {
        this.onSignupSuccess();
      }
    } catch (error) {
      console.error('Error while registering user:', error);
    }
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  onLoginSuccess() {
    this.navigateToChat();
  }
  navigateToChat() {
    this.router.navigate(['/chat']);
  }

  async onSubmit() {
    if (!this.email || !this.password) {
      alert('All fields are required');
      return;
    }

    const userData = {
      email: this.email,
      password: this.password,
    };
    // console.log(userData);
    try {
      const response = await this.http
        .post<any>('https://talkgpt-jddq.onrender.com/login', userData)
        .toPromise();
      // console.log(response);
      alert(response.message);
      if (response) {
        this.onLoginSuccess();
      }
      localStorage.setItem('token', response.token);
      localStorage.setItem('name', response.name);
    } catch (error) {
      console.error('Error while registering user:', error);
    }
  }
}

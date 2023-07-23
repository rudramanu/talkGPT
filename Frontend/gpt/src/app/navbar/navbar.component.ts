import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isChatVisible1: boolean = false;
  isChatVisible: boolean = true;
  userName: string = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isChatVisible1 = true;
    }
    if (token) {
      this.isChatVisible = false;
    }
    if (token) {
      const user = localStorage.getItem('name');
      this.userName = user ? user : 'User';
    }
    if (token) {
      document.getElementById('img1')?.addEventListener('click', () => {
        alert('Please logout, if you want to login with another account');
      });
    }
  }
  logout(): void {
    alert('Logged out successfully');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.isChatVisible1 = false;
    this.isChatVisible = true;
  }
}

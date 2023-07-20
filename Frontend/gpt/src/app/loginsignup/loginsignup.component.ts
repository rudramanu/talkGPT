import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.scss'],
})
export class LoginsignupComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  isChatVisible: boolean = true;

  // ngOnInit() {
  //   const token = localStorage.getItem('authToken');
  //   if (token == undefined) {
  //     this.isChatVisible = false;
  //   }
  // }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  isChatVisible: boolean = false;

  ngOnInit() {
    const token = localStorage.getItem('authToken');
    if (token == undefined) {
      this.isChatVisible = true;
    }
  }
}

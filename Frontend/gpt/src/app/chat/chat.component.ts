import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  isChatVisible: boolean = false;

  @ViewChild('msgInput') msgInput!: ElementRef;
  messages: { content: string; sent: boolean }[] = [];

  async ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isChatVisible = true;
      const data = await this.http
        .get<any[]>('https://talkgpt-jddq.onrender.com/getchat')
        .toPromise();
      if (data !== undefined) {
        this.messages = data;
      }
    }
  }
  socket: Socket;

  constructor(private http: HttpClient) {
    this.socket = io('https://talkgpt-jddq.onrender.com', {
      transports: ['websocket'],
    });

    this.socket.on('receive', (res) => {
      console.log('waah', res);
      this.messages.push({ content: res, sent: false });
    });
  }
  sendMessage() {
    const prompt = this.msgInput.nativeElement.value;
    this.messages.push({ content: prompt, sent: true });
    this.socket.emit('message', prompt);
    this.msgInput.nativeElement.value = '';
  }
}

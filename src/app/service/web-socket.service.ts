import { Injectable } from '@angular/core';
import { ChatMessage } from '../model/chat-message';
import { environment } from '../../environments/environment';
declare var SockJS: any;
declare var Stomp: any;

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private stompClient: any;

  constructor() {
    const ws = new SockJS(environment.backendUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;

    this.stompClient.connect({}, function(frame: any) {
      that.stompClient.subscribe('/topic/public', (message: any) => {
        console.log('received message');
        if (message.body) {
          const chatMessage: ChatMessage = JSON.parse(message.body) as ChatMessage;
          console.log('chatMessage.content=' + chatMessage.content);
        }
      });
      that.sendChatMessage('jesus christ');
    });
  }

  sendChatMessage(message: string) {
    const chatMessage: ChatMessage = {
      content: message,
      sender: 'sender id here'
    }
    this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
  }
}

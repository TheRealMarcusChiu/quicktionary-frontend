import { Injectable } from '@angular/core';
import { ChatMessage } from '../model/chat-message';
import { ParticipantAcquireCard } from '../model/participant-acquire-card';
import { environment } from '../../environments/environment';
declare var SockJS: any;
declare var Stomp: any;

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public stompClient: any;

  constructor() {
//     const ws = new SockJS(environment.backendUrl);
//     this.stompClient = Stomp.over(ws);
//     const that = this;
//
//     this.stompClient.connect({}, function(frame: any) {
//       that.stompClient.subscribe('/topic/public', (message: any) => {
//         console.log('received message');
//         if (message.body) {
//           const chatMessage: ChatMessage = JSON.parse(message.body) as ChatMessage;
//           console.log('chatMessage.content=' + chatMessage.content);
//         }
//       });
//       that.sendChatMessage('jesus christ');
//     });
  }

//   sendChatMessage(message: string) {
//     const chatMessage: ChatMessage = {
//       content: message,
//       sender: 'sender id here'
//     }
//     this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
//   }
//
//   acquireCard(participantName: string, cardColorAcquired: string) {
//     const payload: ParticipantAcquireCard = {
//       participantName: participantName,
//       cardColorAcquired: cardColorAcquired
//     };
//     this.stompClient.send('/app/game.participantAcquireCard', {}, JSON.stringify(payload));
//   }
}

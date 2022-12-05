import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Participant } from '../model/participant';
import { Room } from '../model/room';
import { WebSocketService } from '../service/web-socket.service';
import { HttpService } from '../service/http.service';
import { StateService } from '../service/state.service';
import { DialogComponent } from '../dialog/dialog.component';

import { environment } from '../../environments/environment';

declare var SockJS: any;
declare var Stomp: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  participantName: string;

  activeYellowCardContent: string = '';
  activeBlueCardContent: string = '';
  activeRedCardContent: string = '';

  participants: Participant[] = [];

  constructor(private webSocketService: WebSocketService,
              private httpService: HttpService,
              private stateService: StateService,
              private dialog: MatDialog) {
    this.participantName = this.stateService.getParticipantName();
    this.httpService.getRoom().subscribe(
      (room: Room) => this.updateRoomState(room)
    );

    const ws = new SockJS(environment.backendUrl);
    const stompClient = Stomp.over(ws);
    const that = this;

    stompClient.connect({}, function(frame: any) {
      stompClient.subscribe('/topic/room-updated', (message: any) => {
        const room: Room = JSON.parse(message.body) as Room;
        that.updateRoomState(room);
      });
    });
  }

  updateRoomState(room: Room) {
    this.activeYellowCardContent = room.activeYellowCardContent;
    this.activeBlueCardContent = room.activeBlueCardContent;
    this.activeRedCardContent = room.activeRedCardContent;
    this.participants = room.participants;
  }

  openDialog(targetCardColorToAcquire: string) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (targetCardColorToAcquire == 'yellow') {
          this.acquireCard('YELLOW');
        } else if (targetCardColorToAcquire == 'blue') {
          this.acquireCard('BLUE');
        } else if (targetCardColorToAcquire == 'red') {
          this.acquireCard('RED');
        }
      }
    });
  }

  acquireCard(cardColor: string) {
    this.httpService.acquireCard(this.participantName, cardColor).subscribe(
      response => {
        if (response.success) {
        } else {
          alert(response.errorMessage);
        }
      },
      error => alert('CRITICAL ERROR!!!')
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { YELLOW_CONTENTS, BLUE_CONTENTS, RED_CONTENTS } from '../data/card-contents';
import { Participant } from '../model/participant';
import { WebSocketService } from '../service/web-socket.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  participants: Participant[] = [
    {
      name: 'Marcus Chiu',
      numCardsAcquired: 5
    },
    {
      name: 'Jesus Christ',
      numCardsAcquired: 5
    }
  ];

  yellowContentsAvailable: string[] = YELLOW_CONTENTS;
  blueContentsAvailable: string[] = BLUE_CONTENTS;
  redContentsAvailable: string[] = RED_CONTENTS;

  yellowContentCurrentIndex: number = 0;
  blueContentCurrentIndex: number = 0;
  redContentCurrentIndex: number = 0;

  constructor(private webSocketService: WebSocketService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(targetCardColorToAcquire: string) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (targetCardColorToAcquire == 'yellow') {
          this.acquireYellowCard();
        } else if (targetCardColorToAcquire == 'blue') {
          this.acquireBlueCard();
        } else if (targetCardColorToAcquire == 'red') {
          this.acquireRedCard();
        }
      }
    });
  }

  onSend() {
    this.webSocketService.sendChatMessage('hello world');
  }

  acquireYellowCard() {
    this.yellowContentCurrentIndex += 1;
  }

  acquireBlueCard() {
    this.blueContentCurrentIndex += 1;
  }

  acquireRedCard() {
    this.redContentCurrentIndex += 1;
  }
}

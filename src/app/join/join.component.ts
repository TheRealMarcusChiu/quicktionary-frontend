import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebSocketService } from '../service/web-socket.service';
import { HttpService } from '../service/http.service';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  name: string = '';

  constructor(private webSocketService: WebSocketService,
              private httpService: HttpService,
              private stateService: StateService,
              private router: Router) { }

  ngOnInit(): void {
  }

  join(): void {
    this.httpService.joinRoom(this.name).subscribe(
      response => {
        if (response.success) {
          this.stateService.setParticipantName(this.name);
          this.router.navigate(['game']);
        } else {
          alert(response.errorMessage);
        }
      },
      error => alert('CRITICAL ERROR!!!')
    );
  }

  onChange(event: any): void {
    this.name = event.target.value;
  }
}

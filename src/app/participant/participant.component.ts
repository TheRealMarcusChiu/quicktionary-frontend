import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  @Input() name: string = 'john doe';
  @Input() numCardsAcquired: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

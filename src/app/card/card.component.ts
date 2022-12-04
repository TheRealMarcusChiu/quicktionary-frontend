import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() borderColor: string = 'gray';
  @Input() content: string = 'something went wrong';

  constructor() { }

  ngOnInit(): void {
  }

}

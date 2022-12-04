import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  join(): void {
    console.log(this.name);
  }

  onChange(event: any): void {
    this.name = event.target.value;
  }
}

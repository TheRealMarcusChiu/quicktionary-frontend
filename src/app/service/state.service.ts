import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  participantName: string = '';

  constructor() { }

  public setParticipantName(name: string) {
    this.participantName = name;
  }

  public getParticipantName(): string {
    return this.participantName;
  }
}

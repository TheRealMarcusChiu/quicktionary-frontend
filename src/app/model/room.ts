import { Participant } from './participant';

export interface Room {
  participants: Participant[];

  activeYellowCardContent: string;
  activeBlueCardContent: string;
  activeRedCardContent: string;

  updateMessage: string;
}

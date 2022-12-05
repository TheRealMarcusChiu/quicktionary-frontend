import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Room } from '../model/room';
import { Response } from './model/response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = environment.backendUrl;

  constructor(private http: HttpClient) { }

  joinRoom(participantName: string): Observable<Response> {
    return this.http.post<Response>(this.url + '/api/add/participant/' + encodeURIComponent(participantName), {});
  }

  acquireCard(participantName: string, cardColor: string): Observable<Response> {
    return this.http.post<Response>(this.url + '/api/participant/' + encodeURIComponent(participantName)
     + '/acquires/' + cardColor, {});
  }

  getRoom(): Observable<Room> {
    return this.http.get<Room>(this.url + '/api/room');
  }
}

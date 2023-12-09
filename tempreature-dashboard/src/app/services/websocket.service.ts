import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { TemperatureUpdate } from '../models/temperature-update.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  
  private readonly socketUrl = 'http://localhost:8080/temperature-ws';

  private stompClient: Stomp.Client = Stomp.over(new SockJS(this.socketUrl));

  private temperatureUpdatesSubject = new Subject<TemperatureUpdate[]>();

  temperatureUpdates$: Observable<TemperatureUpdate[]> = this.temperatureUpdatesSubject.asObservable();

  connect(): void {
    this.stompClient.connect({}, () => {
      console.log('Connected to WebSocket');
      this.stompClient.subscribe('/temperature', (message) => {
        const temperatureUpdates = JSON.parse(message.body) as TemperatureUpdate[];
        console.log(temperatureUpdates);
        this.temperatureUpdatesSubject.next(temperatureUpdates);
      });
    });
  }

}
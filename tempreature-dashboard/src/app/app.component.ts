import { Component } from '@angular/core';
import { WebSocketService } from './services/websocket.service';
import { Device } from './models/device.model';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  devices: Device[] = [];

  constructor(private webSocketService: WebSocketService,
    private deviceService: DeviceService) { }

  ngOnInit(): void {

    this.getAllDevices();

    this.webSocketService.connect();

    this.subscibeToNewUpdates();

  }

  private getAllDevices() {
    this.deviceService.getDevices().subscribe({
      next: (devices) => {
        this.devices = devices;
      },
      error: (error) => {
        console.error('Error fetching devices:', error);
      },
    });
  }

  private subscibeToNewUpdates() {
    this.webSocketService.temperatureUpdates$.subscribe((temperatureUpdates) => {
      console.log('Received temperature updates in component:', temperatureUpdates);
      this.deviceService.processTemperatureUpdates(this.devices, temperatureUpdates);
    });
  }

  selectedDevice: Device | undefined;

  showDeviceDetail = (device: Device) => {
    this.selectedDevice = device;
  };
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device.model';
import { TemperatureUpdate } from '../models/temperature-update.model';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private readonly getAllDevicesUrl = 'http://localhost:8080/device';
  private readonly sendUpdateUrl = 'http://localhost:8080/device/update';

  constructor(private http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.getAllDevicesUrl);
  }

  sendDeviceUpdate(body: any): void {
    this.http.post(this.sendUpdateUrl, body)
      .subscribe({
        next: () => {
          console.log('Update success');
        },
        error: (error) => {
          console.error('Update error:', error);
        }
      });
  }

  processTemperatureUpdates(devices: Device[], temperatureUpdates: TemperatureUpdate[]): void {
    temperatureUpdates.forEach((update) => {
      const existingDevice = devices.find((device) => device.id === update.deviceId);

      if (existingDevice) {
        this.updateDevice(existingDevice, update);
      } else {
        this.addDeviceToList(devices, update);
      }
    });
  }

  updateDevice(device: Device, update: TemperatureUpdate) {
    device.temperature = update.temperature;
    device.history.push({
      timestamp: update.timestamp,
      temperature: update.temperature,
    });
  }

  addDeviceToList(devices: Device[], update: TemperatureUpdate){
    devices.push({
      id: update.deviceId,
      temperature: update.temperature,
      history: [
        {
          timestamp: update.timestamp,
          temperature: update.temperature,
        },
      ],
    });
  }
  
}
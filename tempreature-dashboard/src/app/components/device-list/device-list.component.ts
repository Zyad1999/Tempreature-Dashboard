import { Component, Input  } from '@angular/core';
import { Device } from 'src/app/models/device.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {
  @Input() devices: Device[] = [];
  @Input() showDeviceDetail: (device: Device) => void = () => {};
}

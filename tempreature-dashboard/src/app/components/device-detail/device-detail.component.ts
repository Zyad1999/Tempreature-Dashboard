import { Component, Input  } from '@angular/core';
import { DeviceLog } from 'src/app/models/device-log.model';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent {
  @Input() deviceHistory: DeviceLog[] = [];
  @Input() deviceId: string | undefined;
}

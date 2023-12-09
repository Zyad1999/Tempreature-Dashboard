import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-send-update',
  templateUrl: './send-update.component.html',
  styleUrls: ['./send-update.component.css']
})
export class SendUpdateComponent {

  textInput: string = '';
  isValid: boolean = true;

  constructor(private deviceService: DeviceService) { }

  sendPostRequest() {

    this.isValid = /^0x[0-9A-F]+$/i.test(this.textInput) && this.textInput.slice(2).length % 10 === 0;

    if (this.isValid) {
      this.deviceService.sendDeviceUpdate(this.textInput);
      this.textInput = '';
    }
  }
}

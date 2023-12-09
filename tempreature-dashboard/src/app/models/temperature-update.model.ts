export class TemperatureUpdate {
    deviceId: string;
    temperature: number;
    timestamp: string;
  
    constructor(deviceId: string, temperature: number, timestamp: string) {
      this.deviceId = deviceId;
      this.temperature = temperature;
      this.timestamp = timestamp;
    }
  }
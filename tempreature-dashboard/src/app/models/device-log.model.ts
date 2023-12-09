export class DeviceLog {
  timestamp: string;
  temperature: number;

  constructor(timestamp: string, temperature: number) {
    this.timestamp = timestamp;
    this.temperature = temperature;
  }
}
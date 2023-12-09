import { DeviceLog } from "./device-log.model";

export class Device {
  id: string;
  temperature: number;
  history: DeviceLog[];

  constructor(id: string, temperature: number, history: DeviceLog[]) {
    this.id = id;
    this.temperature = temperature;
    this.history = history;
  }
}
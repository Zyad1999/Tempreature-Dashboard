package com.thirdwayv.service;

import com.thirdwayv.dto.Device;
import com.thirdwayv.dto.DeviceLog;
import com.thirdwayv.dto.TemperatureUpdate;
import com.thirdwayv.repository.DeviceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DeviceService {

    private final DeviceRepository deviceRepository;

    public boolean deviceExist(String deviceId){
        return deviceRepository.findById(deviceId).isPresent();
    }

    public Device addDevice(TemperatureUpdate temperatureUpdate){
        Device device = new Device();
        device.setId(temperatureUpdate.getDeviceId());
        device.setTemperature(temperatureUpdate.getTemperature());
        device.setHistory(List.of(new DeviceLog(
                temperatureUpdate.getTimestamp().toString(),
                temperatureUpdate.getTemperature()
        )));
        deviceRepository.insert(device);
        return device;
    }

    public Device updateDevice(TemperatureUpdate temperatureUpdate){
        Optional<Device> device = deviceRepository.findById(temperatureUpdate.getDeviceId());

        if(device.isEmpty()){
            return addDevice(temperatureUpdate);
        }

        DeviceLog deviceLog = new DeviceLog(
                temperatureUpdate.getTimestamp().toString(),
                temperatureUpdate.getTemperature()
        );
        device.get().getHistory().add(deviceLog);
        device.get().setTemperature(temperatureUpdate.getTemperature());
        deviceRepository.save(device.get());

        return device.get();
    }

    public List<Device> getAllDevices(){
        return deviceRepository.findAll();
    }
}

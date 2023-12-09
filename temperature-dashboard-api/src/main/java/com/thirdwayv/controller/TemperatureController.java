package com.thirdwayv.controller;

import com.thirdwayv.dto.Device;
import com.thirdwayv.rabbitmq.RabbitMqProducer;
import com.thirdwayv.service.DeviceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/device")
public class TemperatureController {

    private final RabbitMqProducer producer;
    private final DeviceService deviceService;

    @PostMapping("/update")
    public ResponseEntity<String> receiveUpdates(@RequestBody String update){
        producer.sendMessage(update);
        return ResponseEntity.ok("Update sent successfully");
    }

    @CrossOrigin(origins = "${temperature.dashboard.frontend.url}")
    @GetMapping
    public List<Device> getAllDevices(){
        return deviceService.getAllDevices();
    }
}

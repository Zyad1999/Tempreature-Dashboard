package com.thirdwayv.rabbitmq;

import com.thirdwayv.dto.TemperatureUpdate;
import com.thirdwayv.service.DeviceService;
import com.thirdwayv.service.WebSocketService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Component
@Slf4j
public class RabbitMqConsumer {

    private final WebSocketService webSocketService;
    private final DeviceService deviceService;

    @RabbitListener(queues = "${spring.rabbitmq.queue}")
    public void receiveMessage(String message) {
        log.info(" Received '" + message + "'");
        List<TemperatureUpdate> updates = parseHexString(message);

        for(TemperatureUpdate update:updates){
            if(deviceService.deviceExist(update.getDeviceId()))
                deviceService.updateDevice(update);
            else
                deviceService.addDevice(update);
        }

        webSocketService.sendTemperature(updates);
    }

    public static List<TemperatureUpdate> parseHexString(String hexString) {
        hexString = hexString.substring(2);
        List<TemperatureUpdate> devices = new ArrayList<>();

        for (int i = 0; i < hexString.length(); i += 10) {
            String deviceHex = hexString.substring(i, i + 10);

            String id = hexToDecimal(deviceHex.substring(0, 8));
            String temperature = hexToDecimal(deviceHex.substring(8));

            devices.add(new TemperatureUpdate(id, Integer.parseInt(temperature), LocalDateTime.now()));
        }

        return devices;
    }

    private static String hexToDecimal(String hex) {
        long decimal = Long.parseLong(hex, 16);
        return String.valueOf(decimal);
    }
}

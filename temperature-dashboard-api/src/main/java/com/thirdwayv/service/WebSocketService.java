package com.thirdwayv.service;

import com.thirdwayv.dto.TemperatureUpdate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class WebSocketService {

    private final SimpMessagingTemplate template;

    public void sendTemperature(List<TemperatureUpdate> temperatureUpdate) {
        log.info("sending temperature to sockets");
        log.info(temperatureUpdate.toString());
        template.convertAndSend("/temperature",  temperatureUpdate);
    }
}

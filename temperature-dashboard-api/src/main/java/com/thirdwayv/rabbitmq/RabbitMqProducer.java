package com.thirdwayv.rabbitmq;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class RabbitMqProducer {

    private final RabbitTemplate rabbitTemplate;
    private final Queue queue;

    public void sendMessage(String message) {
        if (isValidInput(message)) {
            rabbitTemplate.convertAndSend(queue.getName(), message);
            log.info(" Sent '" + message + "'");
        }else {
            throw new IllegalArgumentException("Invalid input. Please enter a valid text starting with 0x and with a length multiple of 10.");
        }
    }

    private boolean isValidInput(String input) {
        return input.matches("^0x[0-9A-F]+$") && input.substring(2).length() % 10 == 0;
    }
}

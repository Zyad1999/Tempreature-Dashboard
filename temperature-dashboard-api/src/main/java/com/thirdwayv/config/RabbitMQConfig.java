package com.thirdwayv.config;

import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Bean
    public Queue temperatureQueue(@Value("${spring.rabbitmq.queue}") String QueueName) {
        return new Queue(QueueName);
    }
}

package com.thirdwayv.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class TemperatureUpdate {
    String  deviceId;
    int temperature;
    LocalDateTime timestamp;
}

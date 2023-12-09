package com.thirdwayv.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Document(collection = "devices")
public class Device {

    @Id
    private String id;
    private int temperature;
    private List<DeviceLog> history;

}

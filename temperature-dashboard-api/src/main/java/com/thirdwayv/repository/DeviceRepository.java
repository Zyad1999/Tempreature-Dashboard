package com.thirdwayv.repository;

import com.thirdwayv.dto.Device;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeviceRepository extends MongoRepository<Device, String> {
}

package com.microservicetransport.bus_service.repository;

import com.microservicetransport.bus_service.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepository extends JpaRepository<Driver, Long> {
}

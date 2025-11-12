package com.microservicetransport.bus_service.repository;

import com.microservicetransport.bus_service.entity.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusRepository extends JpaRepository<Bus, Long> {

}

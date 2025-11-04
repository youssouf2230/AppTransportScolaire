package com.microservicetransport.bus_service.service;

import com.microservicetransport.bus_service.entity.Bus;
import com.microservicetransport.bus_service.entity.Driver;
import com.microservicetransport.bus_service.repository.BusRepository;
import com.microservicetransport.bus_service.repository.DriverRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Data
public class BusService {
    private BusRepository busRepository;
    private DriverRepository driverRepository;

    public BusService(BusRepository busRepository,DriverRepository driverRepository) {
        this.busRepository = busRepository;
        this.driverRepository = driverRepository;
    }
    public List<Bus> getBuses() {
        return busRepository.findAll();
    }

    public Optional<Bus> getBus(Long id) {
        return busRepository.findById(id);
    }

    public List<Driver> freeDrivers() {
        return driverRepository.findByBusIsNull();
    }

    public void saveBus(Bus bus) {
        busRepository.save(bus);
    }
    public Bus createBus(Bus bus) {
        return busRepository.save(bus);
    }

    public List<Bus> getBusFree(){
        return busRepository.findAll();
    }

}

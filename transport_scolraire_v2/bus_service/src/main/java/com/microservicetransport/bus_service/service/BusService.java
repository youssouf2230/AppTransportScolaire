package com.microservicetransport.bus_service.service;

import com.microservicetransport.bus_service.entity.Bus;
import com.microservicetransport.bus_service.repository.BusRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Data
public class BusService {
    private BusRepository busRepository;

    public BusService(BusRepository busRepository) {
        this.busRepository = busRepository;
    }
    public List<Bus> getBuses() {
        return busRepository.findAll();
    }

    public Optional<Bus> getBus(Long id) {
        return busRepository.findById(id);
    }

    public void saveBus(Bus bus) {
        busRepository.save(bus);
    }
}

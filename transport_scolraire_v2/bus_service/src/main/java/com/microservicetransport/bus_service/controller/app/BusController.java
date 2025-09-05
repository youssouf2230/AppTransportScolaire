package com.microservicetransport.bus_service.controller.app;

import com.microservicetransport.bus_service.entity.Bus;
import com.microservicetransport.bus_service.service.BusService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/buses")
public class BusController {

    private final BusService busService;

    // Injection par constructeur
    public BusController(BusService busService) {
        this.busService = busService;
    }

    // API GET : retourne la liste des bus
    @GetMapping
    public List<Bus> getBuses() {
        return busService.getBuses();
    }
}

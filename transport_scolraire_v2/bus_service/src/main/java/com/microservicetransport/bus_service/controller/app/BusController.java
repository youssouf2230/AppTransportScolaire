package com.microservicetransport.bus_service.controller.app;

import com.microservicetransport.bus_service.entity.Bus;
import com.microservicetransport.bus_service.service.BusService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/buses")
@CrossOrigin(origins = "http://localhost:3000")
public class BusController {

    private final BusService busService;

    public BusController(BusService busService) {
        this.busService = busService;
    }

    // Récupérer la liste des bus
    @GetMapping
    public List<Bus> getBuses() {
        return busService.getBuses();
    }

    // Récupérer un bus par ID
    @GetMapping("/{id}")
    public ResponseEntity<Bus> getBusById(@PathVariable Long id) {
        return busService.getBus(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Récupérer la position GPS d'un bus
    @GetMapping("/{id}/location")
    public ResponseEntity<Map<String, Double>> getBusLocation(@PathVariable Long id) {
        return busService.getBus(id)
                .map(bus -> {
                    Map<String, Double> location = new HashMap<>();
                    location.put("latitude", bus.getLatitude());
                    location.put("longitude", bus.getLongitude());
                    return ResponseEntity.ok(location);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Mettre à jour la position GPS d'un bus
    @PutMapping("/{id}/location")
    public ResponseEntity<Bus> updateBusLocation(
            @PathVariable Long id,
            @RequestParam Double latitude,
            @RequestParam Double longitude) {

        return busService.getBus(id)
                .map(bus -> {
                    bus.setLatitude(latitude);
                    bus.setLongitude(longitude);
                    busService.saveBus(bus);
                    return ResponseEntity.ok(bus);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}

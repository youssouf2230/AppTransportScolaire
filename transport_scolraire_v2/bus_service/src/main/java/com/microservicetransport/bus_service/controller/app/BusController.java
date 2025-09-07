package com.microservicetransport.bus_service.controller.app;

import com.microservicetransport.bus_service.entity.Bus;
import com.microservicetransport.bus_service.service.BusService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

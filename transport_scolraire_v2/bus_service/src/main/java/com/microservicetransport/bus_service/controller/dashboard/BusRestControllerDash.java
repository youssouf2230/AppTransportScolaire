package com.microservicetransport.bus_service.controller.dashboard;

import com.microservicetransport.bus_service.entity.Bus;
import com.microservicetransport.bus_service.entity.Driver;
import com.microservicetransport.bus_service.service.BusService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard/buses")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class BusRestControllerDash {

    private final BusService busService;

    @PostMapping
    public Bus addBus(@RequestBody Bus bus) {
        return busService.createBus(bus);
    }
    @GetMapping("/free")
    public List<Bus> getBusFree() {
        // adapter après
        return  busService.getBusFree();
    }

    @GetMapping("drivers/free")
    public List<Driver> freeDrivers() {
        return busService.freeDrivers();
    }
}

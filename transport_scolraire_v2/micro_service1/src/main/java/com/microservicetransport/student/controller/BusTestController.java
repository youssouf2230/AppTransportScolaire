package com.microservicetransport.student.controller;

import com.microservicetransport.student.proxies.BusServiceProxy;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class BusTestController {

    private final BusServiceProxy busServiceProxy;

    public BusTestController(BusServiceProxy busServiceProxy) {
        this.busServiceProxy = busServiceProxy;
    }

    @GetMapping("/auth/test-bus")
    public List<Map<String, Object>> getBuses() {
        return busServiceProxy.getAllBuses();
    }
}

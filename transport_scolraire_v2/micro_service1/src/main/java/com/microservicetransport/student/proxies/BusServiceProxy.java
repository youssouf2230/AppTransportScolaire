package com.microservicetransport.student.proxies;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Map;

@FeignClient(name = "bus-service")
public interface BusServiceProxy {
    @GetMapping("/api/bus/all")
    List<Map<String, Object>> getAllBuses();
}

package com.microservicetransport.bus_client.proxies;

import com.microservicetransport.bus_client.dto.BusDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "bus-service")
public interface BusProxy {
    @GetMapping("/buses")
    List<BusDTO> getAllBuses();

    @GetMapping("/buses/{id}")
    BusDTO getBusById(@PathVariable Long id);

    @PostMapping("/buses")
    BusDTO createBus(@RequestBody BusDTO busDTO);

    @PutMapping("/buses/{id}")
    BusDTO updateBus(@PathVariable Long id, @RequestBody BusDTO busDTO);

    @DeleteMapping("/buses/{id}")
    void deleteBus(@PathVariable Long id);
}

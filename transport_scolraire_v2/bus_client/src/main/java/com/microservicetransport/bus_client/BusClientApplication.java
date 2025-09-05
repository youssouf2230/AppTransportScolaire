package com.microservicetransport.bus_client;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.FeignClient;

@SpringBootApplication
@FeignClient(name = "bus-service")
public class BusClientApplication {

    public static void main(String[] args) {
        SpringApplication.run(BusClientApplication.class, args);
    }

}

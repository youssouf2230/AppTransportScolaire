package com.microservicetransport.bus_service;

import com.microservicetransport.bus_service.entity.Bus;
import com.microservicetransport.bus_service.entity.Driver;
import com.microservicetransport.bus_service.repository.BusRepository;
import com.microservicetransport.bus_service.repository.DriverRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients(basePackages = "com.microservicetransport.student_client.proxies")
public class BusServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BusServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(BusRepository busRepository, DriverRepository driverRepository) {
        return args -> {
            // Crée le Bus sans driver
            Bus bus1 = new Bus();
            bus1.setRegistrationNumber("M-20772");
            bus1.setCapacity(32);
            bus1.setStatus("En service");
            bus1.setUrlImage("https://pngimg.com/d/bus_PNG101198.png");
            busRepository.save(bus1);

            // Crée le Driver et assigne le bus
            Driver driver = new Driver();
            driver.setFirstName("Mohamed");
            driver.setLastName("Bouyad");
            driver.setPhoneNumber("0777777777");
            driver.setLicenseNumber("b2025m");
            driver.setBus(bus1);
            driverRepository.save(driver);

            bus1.setDriver(driver);
            busRepository.save(bus1);
        };
    }

}

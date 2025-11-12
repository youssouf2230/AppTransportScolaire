package com.microservicetransport.bus_service;

import com.microservicetransport.bus_service.entity.Bus;
import com.microservicetransport.bus_service.entity.Driver;
import com.microservicetransport.bus_service.proxies.StudentProxy;
import com.microservicetransport.bus_service.dto.StudentDTO;
import com.microservicetransport.bus_service.repository.BusRepository;
import com.microservicetransport.bus_service.repository.DriverRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients(basePackages = "com.microservicetransport.bus_service.proxies")
public class BusServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BusServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(
            BusRepository busRepository,
            DriverRepository driverRepository,
            StudentProxy studentProxy
    ) {
        return args -> {
            String imageUrl = "https://pngimg.com/d/bus_PNG101198.png";


            // --- Création des bus ---
            Bus bus1 = new Bus(null, "M-20772", 0, 32, "En service", imageUrl, null, null, null);
            Bus bus2 = new Bus(null, "M-20773", 0, 40, "En route", imageUrl, null, null, null);
            Bus bus3 = new Bus(null, "M-20774", 0, 35, "En maintenance", imageUrl, null, null, null);
            Bus bus4 = new Bus(null, "M-20775", 0, 35, "En service", imageUrl, null, null, null);
            Bus bus5 = new Bus(null, "M-20776", 0, 40, "En route", imageUrl, null, null, null);
            Bus bus6 = new Bus(null, "M-20777", 0, 60, "En maintenance", imageUrl, null, null, null);
            Bus bus7 = new Bus(null, "M-20778", 0, 45, "En service", imageUrl, null, null, null);
            Bus bus8 = new Bus(null, "M-20779", 0, 40, "En route", imageUrl, null, null, null);
            Bus bus9 = new Bus(null, "M-20780", 0, 32, "En service", imageUrl, null, null, null);

            busRepository.saveAll(List.of(bus1, bus2, bus3, bus4, bus5, bus6, bus7, bus8, bus9));

            // --- Création des drivers ---
            Driver driver1 = new Driver(null, "Mohamed", "Bouyad", "0777777771", "b2025m", bus1);
            Driver driver2 = new Driver(null, "El Imad", "Khely", "0777777772", "b2026m", bus2);
            Driver driver3 = new Driver(null, "Aly Badara", "Guindo", "0777777773", "b2027m", bus3);
            Driver driver4 = new Driver(null, "Yassine", "El Amrani", "0777777774", "b2028m", bus4);
            Driver driver5 = new Driver(null, "Said", "Chakir", "0777777775", "b2029m", bus5);
            Driver driver6 = new Driver(null, "Anas", "Boujemaa", "0777777776", "b2030m", bus6);
            Driver driver7 = new Driver(null, "Karim", "El Fahmi", "0777777777", "b2031m", bus7);
            Driver driver8 = new Driver(null, "Hafsa", "Mouline", "0777777778", "b2032m", bus8);
            Driver driver9 = new Driver(null, "Aya", "Benali", "0777777779", "b2033m", bus9);

            driverRepository.saveAll(List.of(
                    driver1, driver2, driver3, driver4, driver5,
                    driver6, driver7, driver8, driver9
            ));
        };
    }
}

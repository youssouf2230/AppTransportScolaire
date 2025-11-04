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

import java.util.List;

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
            String imageUrl = "https://pngimg.com/d/bus_PNG101198.png";

            // Création des 9 Bus
            Bus bus1 = new Bus();
            bus1.setRegistrationNumber("M-20772");
            bus1.setCapacityLimit(32);
            bus1.setStatus("En service");
            bus1.setUrlImage(imageUrl);

            Bus bus2 = new Bus();
            bus2.setRegistrationNumber("M-20773");
            bus2.setCapacityLimit(40);
            bus2.setStatus("En route");
            bus2.setUrlImage(imageUrl);

            Bus bus3 = new Bus();
            bus3.setRegistrationNumber("M-20774");
            bus3.setCapacityLimit(35);
            bus3.setStatus("En maintenance");
            bus3.setUrlImage(imageUrl);

            Bus bus4 = new Bus();
            bus4.setRegistrationNumber("M-20775");
            bus4.setCapacityLimit(35);
            bus4.setStatus("En service");
            bus4.setUrlImage(imageUrl);

            Bus bus5 = new Bus();
            bus5.setRegistrationNumber("M-20776");
            bus5.setCapacityLimit(40);
            bus5.setStatus("En route");
            bus5.setUrlImage(imageUrl);

            Bus bus6 = new Bus();
            bus6.setRegistrationNumber("M-20777");
            bus6.setCapacityLimit(60);
            bus6.setStatus("En maintenance");
            bus6.setUrlImage(imageUrl);

            Bus bus7 = new Bus();
            bus7.setRegistrationNumber("M-20778");
            bus7.setCapacityLimit(45);
            bus7.setStatus("En service");
            bus7.setUrlImage(imageUrl);

            Bus bus8 = new Bus();
            bus8.setRegistrationNumber("M-20779");
            bus8.setCapacityLimit(40);
            bus8.setStatus("En route");
            bus8.setUrlImage(imageUrl);

            Bus bus9 = new Bus();
            bus9.setRegistrationNumber("M-20780");
            bus9.setCapacityLimit(32);
            bus9.setStatus("En service");
            bus9.setUrlImage(imageUrl);

            // Sauvegarde des bus
            busRepository.saveAll(List.of(bus1, bus2, bus3, bus4, bus5, bus6, bus7, bus8, bus9));

            // Création des 9 Drivers et assignation des bus
            Driver driver1 = new Driver();
            driver1.setFirstName("Mohamed");
            driver1.setLastName("Bouyad");
            driver1.setPhoneNumber("0777777771");
            driver1.setLicenseNumber("b2025m");
            driver1.setBus(bus1);

            Driver driver2 = new Driver();
            driver2.setFirstName("El Imad");
            driver2.setLastName("Khely");
            driver2.setPhoneNumber("0777777772");
            driver2.setLicenseNumber("b2026m");
            driver2.setBus(bus2);

            Driver driver3 = new Driver();
            driver3.setFirstName("Aly Badara");
            driver3.setLastName("Guindo");
            driver3.setPhoneNumber("0777777773");
            driver3.setLicenseNumber("b2027m");
            driver3.setBus(bus3);

            Driver driver4 = new Driver();
            driver4.setFirstName("Yassine");
            driver4.setLastName("El Amrani");
            driver4.setPhoneNumber("0777777774");
            driver4.setLicenseNumber("b2028m");
            driver4.setBus(bus4);

            Driver driver5 = new Driver();
            driver5.setFirstName("Said");
            driver5.setLastName("Chakir");
            driver5.setPhoneNumber("0777777775");
            driver5.setLicenseNumber("b2029m");
            driver5.setBus(bus5);

            Driver driver6 = new Driver();
            driver6.setFirstName("Anas");
            driver6.setLastName("Boujemaa");
            driver6.setPhoneNumber("0777777776");
            driver6.setLicenseNumber("b2030m");
            driver6.setBus(bus6);

            Driver driver7 = new Driver();
            driver7.setFirstName("Karim");
            driver7.setLastName("El Fahmi");
            driver7.setPhoneNumber("0777777777");
            driver7.setLicenseNumber("b2031m");
            driver7.setBus(bus7);

            Driver driver8 = new Driver();
            driver8.setFirstName("Hafsa");
            driver8.setLastName("Mouline");
            driver8.setPhoneNumber("0777777778");
            driver8.setLicenseNumber("b2032m");
            driver8.setBus(bus8);

            Driver driver9 = new Driver();
            driver9.setFirstName("Aya");
            driver9.setLastName("Benali");
            driver9.setPhoneNumber("0777777779");
            driver9.setLicenseNumber("b2033m");
            driver9.setBus(bus9);

            // Sauvegarde des drivers
            driverRepository.saveAll(List.of(driver1, driver2, driver3, driver4, driver5, driver6, driver7, driver8, driver9));

            // Associer les drivers aux bus
            bus1.setDriver(driver1);
            bus2.setDriver(driver2);
            bus3.setDriver(driver3);
            bus4.setDriver(driver4);
            bus5.setDriver(driver5);
            bus6.setDriver(driver6);
            bus7.setDriver(driver7);
            bus8.setDriver(driver8);
            bus9.setDriver(driver9);

            // Sauvegarder les bus mis à jour
            busRepository.saveAll(List.of(bus1, bus2, bus3, bus4, bus5, bus6, bus7, bus8, bus9));

            // Création de Drivers SANS bus
            Driver freeDriver1 = new Driver();
            freeDriver1.setFirstName("Hamid");
            freeDriver1.setLastName("Zouhair");
            freeDriver1.setPhoneNumber("0788888881");
            freeDriver1.setLicenseNumber("b3001m");
            // pas de freeDriver1.setBus(...)

            Driver freeDriver2 = new Driver();
            freeDriver2.setFirstName("Fatima");
            freeDriver2.setLastName("El Idrissi");
            freeDriver2.setPhoneNumber("0788888882");
            freeDriver2.setLicenseNumber("b3002m");
            // pas de freeDriver2.setBus(...)

            // Sauvegarde
            driverRepository.saveAll(List.of(freeDriver1, freeDriver2));

        };
    }


}

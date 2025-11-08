package com.microservicetransport.bus_service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class DriverDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String licenseNumber;
    //private BusDTO bus;
}

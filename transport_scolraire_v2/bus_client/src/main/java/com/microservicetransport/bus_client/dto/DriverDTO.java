package com.microservicetransport.bus_client.dto;

import lombok.*;

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

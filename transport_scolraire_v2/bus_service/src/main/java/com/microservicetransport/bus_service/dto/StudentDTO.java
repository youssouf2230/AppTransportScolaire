package com.microservicetransport.bus_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String codeMassar;
    private String phoneNumber;
    private Double latitude;
    private Double longitude;
    private Long busId;
}

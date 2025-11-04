package com.microservicetransport.student.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequestDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String codeMassar;
    private String phoneNumber;
    private String password;

}

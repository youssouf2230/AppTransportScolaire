package com.microservicetransport.bus_service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String registrationNumber;

    @Column(nullable = false)
    private Integer capacity;

    @Column(nullable = false)
    private String status; // ACTIVE, MAINTENANCE, INACTIVE

    @OneToOne
    @JoinColumn(name = "driver_id")
    private Driver driver; // Chauffeur assigné

}

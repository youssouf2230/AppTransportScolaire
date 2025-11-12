package com.microservicetransport.bus_service.controller;

import com.microservicetransport.bus_service.dto.StudentDTO;
import com.microservicetransport.bus_service.proxies.StudentProxy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentController {

    private final StudentProxy studentProxy;

    public StudentController(StudentProxy studentProxy) {
        this.studentProxy = studentProxy;
    }

    @GetMapping("/api/dashboard/buses/students")
    public List<StudentDTO> getAllStudents() {
        return studentProxy.getAllStudents();
    }
}
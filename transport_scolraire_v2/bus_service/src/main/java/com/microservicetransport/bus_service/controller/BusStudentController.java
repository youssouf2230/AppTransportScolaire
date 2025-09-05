package com.microservicetransport.bus_service.controller;

import com.microservicetransport.bus_service.service.BusStudentService;
import com.microservicetransport.student_client.dto.StudentDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/bus-student")
public class BusStudentController {

    private final BusStudentService busStudentService;

    public BusStudentController(BusStudentService busStudentService) {
        this.busStudentService = busStudentService;
    }

    @GetMapping("/students")
    public List<StudentDTO> getAllStudents() {
        return busStudentService.getAllStudents();
    }
}

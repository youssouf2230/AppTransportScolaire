package com.microservicetransport.bus_service.proxies;

import com.microservicetransport.bus_service.dto.StudentDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "student-service", url = "http://localhost:8082")
public interface StudentProxy {

    @GetMapping("/students")
    List<StudentDTO> getAllStudents();

    @GetMapping("/students/{id}")
    StudentDTO getStudentById(@PathVariable("id") Long id);

    @PostMapping("/students")
    StudentDTO createStudent(@RequestBody StudentDTO studentDTO);
}
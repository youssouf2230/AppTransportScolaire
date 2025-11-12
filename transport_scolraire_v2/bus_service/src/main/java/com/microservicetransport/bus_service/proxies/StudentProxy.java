package com.microservicetransport.bus_service.proxies;

import com.microservicetransport.bus_service.dto.StudentDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "student-service")
public interface StudentProxy {

    @GetMapping("/api/dashboard/students/test")
    List<StudentDTO> getAllStudents();

    @GetMapping("/api/dashboard/students/test{id}")
    StudentDTO getStudentById(@PathVariable("id") Long id);

    @PostMapping("/api/dashboard/students/test")
    StudentDTO createStudent(@RequestBody StudentDTO studentDTO);
}

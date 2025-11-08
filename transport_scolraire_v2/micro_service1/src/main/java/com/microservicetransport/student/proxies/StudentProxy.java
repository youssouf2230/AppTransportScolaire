package com.microservicetransport.student.proxies;

import com.microservicetransport.student.dto.StudentDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "student-service")
public interface StudentProxy {
    @GetMapping("/students")
    List<StudentDTO> getAllStudents();

    @GetMapping("/students/{id}")
    StudentDTO getStudentById(@PathVariable("id") Long id);

    @PostMapping("/students")
    StudentDTO createStudent(@RequestBody StudentDTO studentDTO);

    @PutMapping("/students/{id}")
    StudentDTO updateStudent(@PathVariable("id") Long id, @RequestBody StudentDTO studentDTO);

    @DeleteMapping("/students/{id}")
    void deleteStudent(@PathVariable("id") Long id);

}

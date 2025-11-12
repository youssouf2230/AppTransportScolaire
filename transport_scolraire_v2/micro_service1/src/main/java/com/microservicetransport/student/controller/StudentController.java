package com.microservicetransport.student.controller;

import com.microservicetransport.student.dto.StudentDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    // Exemple : liste en mémoire pour test
    private final List<StudentDTO> students = new ArrayList<>();

    public StudentController() {
        students.add(new StudentDTO(1L, "Youssouf", "Diabaté", "youssouf@mail.com", "CM001", "0612345678", 34.0, -6.0, 1L));
        students.add(new StudentDTO(2L, "Ali", "Ahmed", "ali@mail.com", "CM002", "0698765432", 34.1, -6.1, 1L));
    }

    @GetMapping
    public List<StudentDTO> getAllStudents() {
        return students;
    }

    @GetMapping("/{id}")
    public StudentDTO getStudentById(@PathVariable Long id) {
        return students.stream()
                .filter(s -> s.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @PostMapping
    public StudentDTO createStudent(@RequestBody StudentDTO studentDTO) {
        students.add(studentDTO);
        return studentDTO;
    }
}
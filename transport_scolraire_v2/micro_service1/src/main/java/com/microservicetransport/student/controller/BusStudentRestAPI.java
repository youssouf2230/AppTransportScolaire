package com.microservicetransport.student.controller;

import com.microservicetransport.student.dto.StudentDTO;
import com.microservicetransport.student.entity.Student;
import com.microservicetransport.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/dashboard/students/test")
@CrossOrigin(origins = "*")
public class BusStudentRestAPI {

    private final StudentService studentService;

    @Autowired
    public BusStudentRestAPI(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public ResponseEntity<List<StudentDTO>> getAllStudents() {
        List<Student> students = studentService.getAllStudents(); // 🔹 renvoie des entités
        List<StudentDTO> dtos = students.stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudentDTO> getStudentById(@PathVariable Long id) {
        Student student = studentService.getStudentById(id);
        return ResponseEntity.ok(mapToDTO(student));
    }

    @PostMapping
    public ResponseEntity<StudentDTO> createStudent(@RequestBody StudentDTO studentDTO) {
        Student student = mapToEntity(studentDTO);
        Student saved = studentService.createStudent(student);
        return ResponseEntity.ok(mapToDTO(saved));
    }

    // 🔹 Méthodes utilitaires de mapping
    private StudentDTO mapToDTO(Student student) {
        StudentDTO dto = new StudentDTO();
        dto.setId(student.getId());
        dto.setEmail(student.getEmail());
        dto.setFirstName(student.getFirstName());
        dto.setLastName(student.getLastName());
        dto.setPhoneNumber(student.getPhoneNumber());
        dto.setCodeMassar(student.getCodeMassar());
        dto.setBusId(student.getBusId());
        return dto;
    }

    private Student mapToEntity(StudentDTO dto) {
        Student student = new Student();
        student.setId(dto.getId());
        student.setEmail(dto.getEmail());
        student.setFirstName(dto.getFirstName());
        student.setLastName(dto.getLastName());
        student.setPhoneNumber(dto.getPhoneNumber());
        student.setCodeMassar(dto.getCodeMassar());
        return student;
    }
}

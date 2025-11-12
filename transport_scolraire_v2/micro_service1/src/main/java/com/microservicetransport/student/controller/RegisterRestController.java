package com.microservicetransport.student.controller;

import com.microservicetransport.student.dto.RegisterRequestDTO;
import com.microservicetransport.student.entity.Student;
import com.microservicetransport.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/auth/register")
@CrossOrigin("*")
public class RegisterRestController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public ResponseEntity<?> register(@RequestBody RegisterRequestDTO req) {
        System.out.println("================================================");
        System.out.println("RegisterRequest reçu : " + req.getEmail());
        System.out.println("================================================");

        // Vérifier si l'email existe déjà
        Student existing = studentService.getStudentByEmail(req.getEmail());

        if (existing != null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Email already in use"));
        }

        // Créer un nouveau Student
        Student student = new Student();
        student.setFirstName(req.getFirstName());
        student.setLastName(req.getLastName());
        student.setEmail(req.getEmail());
        student.setCodeMassar(req.getCodeMassar());
        student.setPhoneNumber(req.getPhoneNumber());
        student.setPassword(passwordEncoder.encode(req.getPassword()));

        // Sauvegarder
        studentService.saveStudent(student);

        return ResponseEntity.ok(Map.of("message", "Registration successful"));
    }

    @GetMapping("/hello")
    public String test(){
        return "Hello";
    }
}
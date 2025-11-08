package com.microservicetransport.student.controller;


import com.microservicetransport.student.dto.LoginRequestDTO;
import com.microservicetransport.student.entity.Student;
import com.microservicetransport.student.repository.StudentRepository;
import com.microservicetransport.student.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth/login")
@CrossOrigin("*")
public class LoginRestController {

    @Autowired
    private StudentRepository studentRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO req) {
        Student student = studentRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("Email non trouvé"));

        if (!passwordEncoder.matches(req.getPassword(), student.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Mot de passe invalide"));
        }

        String token = jwtUtil.generateToken(student);

        // On ne renvoie que l'email et le token
        Map<String, Object> responseBody = Map.of(
                "token", token,
                "email", student.getEmail()
        );

        return ResponseEntity.ok(responseBody);
    }
}


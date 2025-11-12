package com.microservicetransport.student.controller.dashboard;

import com.microservicetransport.student.entity.Student;
import com.microservicetransport.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentRestControllerDash {

    @Autowired
    private StudentService studentService;

    //  GET : Liste de tous les étudiants
    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    //  GET : Détails d’un étudiant par ID
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }


    // POST : Ajouter un nouvel étudiant
   @PostMapping
   public Student createStudent(@RequestBody Student student) {
        //System.out.println(student);

        return studentService.createStudent(student);
    }


    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student student) {
        return studentService.updateStudent(id, student);
    }

    //  DELETE : Supprimer un étudiant
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}

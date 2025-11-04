package com.microservicetransport.student.service;

import com.microservicetransport.student.entity.Student;
import com.microservicetransport.student.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {


    private static StudentRepository studentRepository = null;

    public StudentService(StudentRepository studentRepository) {
        StudentService.studentRepository = studentRepository;
    }

    public  Student getStudentByEmail(String email) {
        return studentRepository.findByEmail(email).orElse(null);
    }
    public void saveStudent(Student student) {
        studentRepository.save(student);
    }
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }
    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    //@Override
    public Student updateStudent(Long id, Student updatedStudent) {
        return studentRepository.findById(id).map(student -> {
            student.setFirstName(updatedStudent.getFirstName());
            student.setLastName(updatedStudent.getLastName());
            student.setEmail(updatedStudent.getEmail());
            student.setCodeMassar(updatedStudent.getCodeMassar());
            student.setPhoneNumber(updatedStudent.getPhoneNumber());
            student.setPassword(updatedStudent.getPassword());
            student.setLatitude(updatedStudent.getLatitude());
            student.setLongitude(updatedStudent.getLongitude());
            student.setBusId(updatedStudent.getBusId());
            return studentRepository.save(student);
        }).orElse(null);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

}

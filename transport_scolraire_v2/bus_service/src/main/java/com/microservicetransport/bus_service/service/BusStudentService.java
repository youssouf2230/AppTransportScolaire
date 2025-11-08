package com.microservicetransport.bus_service.service;

import com.microservicetransport.bus_service.dto.StudentDTO;
import com.microservicetransport.bus_service.proxies.StudentProxy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusStudentService {

    private final StudentProxy studentProxy;

    public BusStudentService(StudentProxy studentProxy) {
        this.studentProxy = studentProxy;
    }

    public List<StudentDTO> getAllStudents() {
        return studentProxy.getAllStudents();
    }

    public StudentDTO getStudent(Long id) {
        return studentProxy.getStudentById(id);
    }

    public StudentDTO createStudent(StudentDTO studentDTO) {
        return studentProxy.createStudent(studentDTO);
    }
}

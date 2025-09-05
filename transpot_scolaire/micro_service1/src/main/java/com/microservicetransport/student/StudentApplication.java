package com.microservicetransport.student;

import com.microservicetransport.student.entity.Student;
import com.microservicetransport.student.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class StudentApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(StudentRepository studentRepository) {
        return args -> {
            Student student1 = new Student(null,"Youssouf","Diabaté","y.diabate@edu.umi.ac.ma","2100000014","0774507360",34.0209, -6.8416, 1L);
            Student student2 = new Student(null,"Aliou Badara","Guindo","g.guindo@edu.umi.ac.ma","2100000016","0774507360",12.05, -6.8416, 1L);
            studentRepository.save(student1);
            studentRepository.save(student2);
        };
    }

}

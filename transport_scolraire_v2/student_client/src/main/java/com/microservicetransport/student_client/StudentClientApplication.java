package com.microservicetransport.student_client;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class StudentClientApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentClientApplication.class, args);
	}

}

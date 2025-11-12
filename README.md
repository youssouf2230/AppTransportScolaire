#  App Transport Scolaire

Une application  pour la **gestion du transport scolaire**, conçue en **architecture microservices** avec **Spring Boot**, **Spring Cloud**, **Docker** et un **frontend Next.js** moderne.  
Le projet facilite la gestion des **bus**, **étudiants** et la communication entre services via **Eureka** et **API Gateway**.


## Technologies principales

###  Backend
- **Java 21**
- **Spring Boot 3.5**
- **Spring Cloud Netflix Eureka**
- **Spring Cloud Gateway**
- **Spring Data JPA / Hibernate**
- **Spring Security (JWT)**
- **H2**
- **Maven**
- **Docker & Docker Compose**

###  Frontend
- **Next.js 15 (App Router)**
- **React 18+**
- **Tailwind CSS**
- **TypeScript**
- **Axios**
- **shadcn/ui** (composants UI modernes)

---

##  Fonctionnalités

###  Microservice Student
- CRUD complet sur les étudiants.  
- Association d’un étudiant à un bus.  
- Communication avec le service Bus via REST (Eureka + Gateway).

###  Microservice Bus
- CRUD complet sur les bus et chauffeurs.  

###  Eureka Server
- Service de découverte permettant aux microservices de s’enregistrer et de communiquer sans configurer manuellement les URLs.

###  Frontend Next.js
- Interface web moderne et responsive.  
- Tableau de bord de gestion (bus, étudiants).

#  App Transport Scolaire

<img width="1846" height="883" alt="image" src="https://github.com/user-attachments/assets/d8da6af4-314f-4043-a969-dbad3611a05f" />
<img width="1803" height="872" alt="image" src="https://github.com/user-attachments/assets/7299eaf7-7b79-421b-ab2e-3e72b3818ecf" />
<img width="1808" height="877" alt="image" src="https://github.com/user-attachments/assets/f05bf3a9-ba5a-42a0-8080-00a5469fa3f1" />
<img width="1846" height="893" alt="image" src="https://github.com/user-attachments/assets/9491bb4a-afa8-41aa-88fa-65c965582090" />
<img width="1818" height="862" alt="image" src="https://github.com/user-attachments/assets/5bf58098-d869-4d76-b546-3cdddded78df" />
<img width="1817" height="869" alt="image" src="https://github.com/user-attachments/assets/4eb75e6a-e188-4d71-9fe1-b75052357f44" />



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

package com.microservicetransport.student.security;

import com.microservicetransport.student.entity.Student;
import com.microservicetransport.student.service.StudentService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Component
@RequiredArgsConstructor
public class JwtCookieFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final StudentService studentService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String path = request.getRequestURI();

        // Ignorer les endpoints publics
        if (path.startsWith("/auth/") || path.startsWith("/h2-console") || path.startsWith("/swagger")) {
            filterChain.doFilter(request, response);
            return;
        }

        // Extraire le cookie 'token'
        String token = null;
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("token".equals(cookie.getName())) {
                    token = cookie.getValue();
                    break;
                }
            }
        }

        // Si token présent et SecurityContext non authentifié
        if (token != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            try {
                if (jwtUtil.validateToken(token)) {
                    String email = JwtUtil.extractEmail(token);
                    Student user = studentService.getStudentByEmail(email);

                    if (user != null) {
                        UsernamePasswordAuthenticationToken authToken =
                                new UsernamePasswordAuthenticationToken(
                                        user,
                                        null,
                                        Collections.emptyList() // tu peux remplacer par user.getRoles()
                                );

                        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authToken);
                    }
                }
            } catch (Exception e) {
                logger.warn("Invalid JWT token from cookie: " + e.getMessage());
                // NE PAS bloquer la requête → laisser passer
            }
        }

        filterChain.doFilter(request, response);
    }
}

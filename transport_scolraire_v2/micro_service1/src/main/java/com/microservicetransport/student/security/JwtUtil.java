package com.microservicetransport.student.security;

import com.microservicetransport.student.entity.Student;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtUtil {

    private static final String SECRET_STRING = "CvgR4Tx9eM6zXfLtQ1KjWd83vLzP9nZpBq7Ru6HsNtLkAa2D3MjRf8UwXeYcVpZn";

    private static SecretKey key = null;

    public JwtUtil() {
        this.key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET_STRING));
    }

    public String generateToken(Student user) {
        return Jwts.builder()
                .subject(user.getEmail())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 12 * 60 * 60 * 1000)) // 12h
                .signWith(key)
                .compact();
    }

    // Extraction email (sub) depuis token validé
    public static String extractEmail(String token) {
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }

    // Validation simple (retourne true si valide et pas expiré)
    public boolean validateToken(String token) {
        try {
            Jws<Claims> claimsJws = Jwts.parser()
                    .verifyWith(key)
                    .build()
                    .parseSignedClaims(token);

            Date expiration = claimsJws.getPayload().getExpiration();
            return expiration.after(new Date());

        } catch (JwtException | IllegalArgumentException e) {
            return false; // invalide ou expiré
        }
    }

    // Vérifie explicitement l’expiration (optionnel)
    public boolean isTokenExpired(String token) {
        Date expiration = Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getExpiration();

        return expiration.before(new Date());
    }
}

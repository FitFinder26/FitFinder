package edu.alexu.fitfinder.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
  @Value("${security.jwt.secret-key}")
  private String secretKey;

  @Value("${security.jwt.access-expiration-time}")
  private long accessExpiration;

  @Value("${security.jwt.refresh-expiration-time}")
  private long refreshExpiration;

  private Claims extractAllClaims(String token) {
    return Jwts.parserBuilder()
        .setSigningKey(getSignInKey())
        .build()
        .parseClaimsJws(token)
        .getBody();
  }

  private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
    final Claims claims = extractAllClaims(token);
    return claimsResolver.apply(claims);
  }

  public Date extractExpiration(String token) {
    return extractClaim(token, Claims::getExpiration);
  }

  public String extractUserId(String token) {
    return extractClaim(token, Claims::getSubject);
  }

  public String generateAccessToken(String id) {
    return generateToken(new HashMap<>(), id, accessExpiration);
  }

  public String generateRefreshToken(String id) {
    return generateToken(new HashMap<>(), id, refreshExpiration);
  }

  private String generateToken(Map<String, Object> extraClaims, String id, long expiration) {
    return buildToken(extraClaims, id, expiration);
  }

  private String buildToken(Map<String, Object> extraClaims, String id, long expiration) {
    return Jwts.builder()
        .setClaims(extraClaims)
        .setSubject(id)
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + expiration))
        .signWith(getSignInKey(), SignatureAlgorithm.HS256)
        .compact();
  }

  public boolean isTokenExpired(String token) {
    return extractExpiration(token).before(new Date());
  }

  private Key getSignInKey() {
    byte[] keyBytes = Decoders.BASE64.decode(secretKey);
    return Keys.hmacShaKeyFor(keyBytes);
  }
}

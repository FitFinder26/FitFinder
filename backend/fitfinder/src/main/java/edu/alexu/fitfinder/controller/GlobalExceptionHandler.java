package edu.alexu.fitfinder.controller;

import edu.alexu.fitfinder.exception.InvalidInputException;
import edu.alexu.fitfinder.exception.UnauthorizedException;
import edu.alexu.fitfinder.exception.UpstreamServiceException;
import edu.alexu.fitfinder.exception.UserAlreadyExistsException;
import edu.alexu.fitfinder.exception.SocketException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MissingRequestHeaderException;
import org.springframework.web.reactive.function.client.WebClientException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartException;

import java.io.IOException;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
  private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

  @ExceptionHandler(UserAlreadyExistsException.class)
  public ResponseEntity<Map<String, String>> handleUserExists(UserAlreadyExistsException e) {
    return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("error", e.getMessage()));
  }

  @ExceptionHandler(InvalidInputException.class)
  public ResponseEntity<Map<String, String>> handleInvalidInput(InvalidInputException e) {
    return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
        .body(Map.of("error", e.getMessage()));
  }

  @ExceptionHandler(UnauthorizedException.class)
  public ResponseEntity<Map<String, String>> handleUnauthorizedRequest(UnauthorizedException e) {
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", e.getMessage()));
  }

  @ExceptionHandler(MaxUploadSizeExceededException.class)
  public ResponseEntity<?> handleMaxSizeException(MaxUploadSizeExceededException exc) {
    return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
        .body("File size shouldn't exceeds 10MB.");
  }

  @ExceptionHandler(MultipartException.class)
  public ResponseEntity<?> handleMultipartException(MultipartException exc) {
    return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE).body("Invalid file upload.");
  }

  @ExceptionHandler(SocketException.class)
  public ResponseEntity<Map<String, String>> handleSocketException(SocketException e) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", e.getMessage()));
  }

  @ExceptionHandler(IOException.class)
  public ResponseEntity<Map<String, String>> handleIOException(IOException e) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body(Map.of("error", e.getMessage()));
  }

  @ExceptionHandler(UpstreamServiceException.class)
  public ResponseEntity<Map<String, String>> handleUpstreamService(UpstreamServiceException e) {
    return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
        .body(Map.of("error", e.getMessage()));
  }

  @ExceptionHandler(WebClientException.class)
  public ResponseEntity<Map<String, String>> handleWebClientException(WebClientException e) {
    logger.warn("Upstream WebClient error", e);
    return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
        .body(Map.of("error", "AI service is temporarily unavailable. Please retry."));
  }

  @ExceptionHandler(HttpMessageNotReadableException.class)
  public ResponseEntity<Map<String, String>> handleMalformedJson(HttpMessageNotReadableException e) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
        .body(Map.of("error", "Malformed request body"));
  }

  @ExceptionHandler(MissingRequestHeaderException.class)
  public ResponseEntity<Map<String, String>> handleMissingHeader(MissingRequestHeaderException e) {
    if ("Authorization".equalsIgnoreCase(e.getHeaderName())) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
          .body(Map.of("error", "Missing Authorization header"));
    }
    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
        .body(Map.of("error", "Missing required header: " + e.getHeaderName()));
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<Map<String, String>> handleGeneric(Exception e) {
    logger.error("Unhandled exception", e);
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body(Map.of("error", "Internal server error"));
  }
}

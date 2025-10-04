# FitFinder Backend

This project runs both a **Spring Boot** (Java) server and a **FastAPI** (Python) server.

## Requirements

- Java 17+ (for Spring Boot)
- Python 3.8+ (for FastAPI)
- Maven (for building Spring Boot)
- pip (for Python dependencies)

## Setup

### 1. Spring Boot

```bash
cd spring-boot-backend
mvn clean install
mvn spring-boot:run
```

### 2. FastAPI

```bash
cd fastapi-backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Project Structure

```
/spring-boot-backend   # Spring Boot application
/fastapi-backend       # FastAPI application
```

## Usage

- Spring Boot runs on: `http://localhost:8080`
- FastAPI runs on: `http://localhost:8000`

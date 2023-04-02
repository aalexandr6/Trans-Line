DROP DATABASE IF EXISTS driverlogs_db;
CREATE DATABASE driverlogs_db;

USE drivers_db;

CREATE TABLE drivers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  driver_name VARCHAR(50) NOT NULL
);



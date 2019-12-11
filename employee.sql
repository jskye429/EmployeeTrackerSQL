CREATE DATABASE employeeTrack_db;

USE employeeTrack_db;


CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles

id INT NOT NULL AUTO_INCREMENT, --PRIMARY KEY--
title VARCHAR(30),
salary DECIMAL 
department_id INT --FOREIGN KEY--
;
DROP DATABASE IF EXISTS employeeTrack_db;

CREATE DATABASE employeeTrack_db;

USE employeeTrack_db;


CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (

id INT NOT NULL AUTO_INCREMENT, 
title VARCHAR(30),
salary DECIMAL, 
department_id INT 
);

CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
manager_id INT NOT NULL AUTO_INCREMENT
);

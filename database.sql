CREATE DATABASE tasksApp_database;

--\c get into taskApp_database

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname TEXT(25) NOT NULL,
    username VARCHAR(15) UNIQUE NOT NULL,
    password  INT VARCHAR(6) CHECK[@,/,#,$,%,&,!] NOT NULL,
    wallet INT DEFAULT(5000)
)

CREATE TABLE tasks(
    admin_id INT FOREIGN KEY,
    name TEXT(40) UNIQUE NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status BOOLEAN DEFAULT(TRUE),
    price INT,
    participants INT  
)
DROP DATABASE IF EXISTS drinkedin;

CREATE DATABASE drinkedin;

USE drinkedin;

CREATE TABLE bars (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  address varchar(200) NOT NULL,
  img_url varchar(200) NOT NULL,
  hours varchar (200) NOT NULL,
  description varchar(200) NOT NULL,
  phonenumber varchar(12) NOT NULL,
  PRIMARY KEY (ID)
);

 CREATE TABLE bartenders (
 	id int NOT NULL AUTO_INCREMENT,
 	name varchar(200) NOT NULL,
 	bar_id int NOT NULL,
 	expert_right int,
 	expert_left int,
 	friendly_right int,
 	friendly_left int,
 	quick_right int,
 	quick_left int,
 	PRIMARY KEY (ID)
 	);
DROP DATABASE IF EXISTS drinkedin;

CREATE DATABASE drinkedin;

USE drinkedin;

CREATE TABLE bars (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  address varchar(200) NOT NULL,
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



  INSERT INTO bartenders (name, bar_id, expert_right, expert_left, friendly_right, friendly_left, quick_right, quick_left) VALUES ('Datum Bass', 2, 10, 5, 8, 4, 9, 1),
  ('Esteban Quito', 1, 15, 3, 2, 17, 2, 7),
  ('Sum Rand Om Gai', 3, 1, 15, 8, 24, 9, 31),
  ('John Doe', 2, 101, 50, 80, 40, 90, 10);
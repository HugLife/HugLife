DROP DATABASE IF EXISTS drinkedin;

CREATE DATABASE drinkedin;

USE drinkedin;

CREATE TABLE bars (
  id varchar(100) NOT NULL UNIQUE,
  name varchar(50) NOT NULL,
  address varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

 CREATE TABLE bartenders (
 	id int NOT NULL AUTO_INCREMENT UNIQUE,
 	name varchar(200) NOT NULL,
 	bar_id varchar(100) NOT NULL,
 	expert_right int,
 	expert_left int,
 	friendly_right int,
 	friendly_left int,
 	quick_right int,
 	quick_left int,
 	message varchar(500),
 	PRIMARY KEY (ID)
 	);



  INSERT INTO bartenders (name, bar_id, expert_right, expert_left, friendly_right, friendly_left, quick_right, quick_left, message) VALUES ('Datum Bass', '1', 10, 5, 8, 4, 9, 1, 'I love KFC'),
  ('Esteban Quito', '1', 15, 3, 2, 17, 2, 7, 'eat more halal guys! my drinks pair well with it'),
  ('Sum Rand Om Gai', '1', 1, 15, 8, 24, 9, 31, 'I specialize in beer'),
  ('The beastmaster', '1', 1, 15, 8, 24, 9, 31, 'My drinks are beast'),
  ('John Doe', '1', 101, 50, 80, 40, 90, 10, 'Not quite sure what to say');
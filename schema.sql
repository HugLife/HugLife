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
  phonenumber varchar(15) NOT NULL,
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
 	)

  INSERT INTO bars (name, address, hours, description, phonenumber) VALUES ("Tempest", "431 Natoma St", "11:00 am - 2:00 am", "Nice bar on Natoma St", "555-555-5555");
  INSERT INTO bars (name, address, hours, description, phonenumber) VALUES ("Databases", "934 Howard St", "11:00 am - 2:00 am", "A place to be yourself", "444-444-4444");
  INSERT INTO bars (name, address, hours, description, phonenumber) VALUES ("Mikeller", "34 Mason St", "11:00 am - 2:00 am", "Hack Reactor's students are our source of income", "333-333-3333");


  INSERT INTO bartenders (name, bar_id, expert_right, expert_left, friendly_right, friendly_left, quick_right, quick_left) VALUES ('Datum Bass', 2, 10, 5, 8, 4, 9, 1);
  INSERT INTO bartenders (name, bar_id, expert_right, expert_left, friendly_right, friendly_left, quick_right, quick_left) VALUES ('Esteban Quito', 1, 15, 3, 2, 17, 2, 7);
  INSERT INTO bartenders (name, bar_id, expert_right, expert_left, friendly_right, friendly_left, quick_right, quick_left) VALUES ('Sum Rand Om Gai', 3, 1, 15, 8, 24, 9, 31);
  INSERT INTO bartenders (name, bar_id, expert_right, expert_left, friendly_right, friendly_left, quick_right, quick_left) VALUES ('John Doe', 2, 101, 50, 80, 40, 90, 10);
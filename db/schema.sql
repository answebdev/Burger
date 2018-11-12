-- Create the burgers_db database
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name  varchar(150) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    currentDate  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
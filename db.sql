-- to create a new database
CREATE DATABASE lucasdb;

-- to use database
use lucasdb;

-- creating a new table
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(128) NOT NULL,
  password VARCHAR(128) NOT NULL,
  PRIMARY KEY(ID)
);

-- to show all tables
show tables;

-- to describe table
desc users;



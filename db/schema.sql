DROP DATABASE IF EXISTS dogs_db;
CREATE DATABASE dogs_db;
USE dogs_db;

CREATE TABLE dogs (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  spayed tinyint NOT NULL DEFAULT '0',
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)


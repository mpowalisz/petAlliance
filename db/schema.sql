CREATE DATABASE dogs_db;
USE dogs_db;

CREATE TABLE `dogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `spayed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
)
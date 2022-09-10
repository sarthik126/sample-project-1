CREATE TABLE `testdb`.`admindetails` (
  `email` VARCHAR(255) NOT NULL,
  `pass` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`email`));
  
CREATE TABLE `testdb`.`userdetails` (
  `username` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `phone` VARCHAR(20) NULL,
  `project` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`phone`));

insert into testdb.admindetails (email,pass) values ("admin@gmail.com","123");

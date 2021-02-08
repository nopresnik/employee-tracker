CREATE TABLE `employee-tracker`.`employee` (
  `id` INT NOT NULL,
  `first_name` VARCHAR(30) NULL,
  `last_name` VARCHAR(30) NULL,
  `role_id` INT NULL,
  `manager_id` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `employee-tracker`.`department` (
  `id` INT NOT NULL,
  `name` VARCHAR(30) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `employee-tracker`.`role` (
  `id` INT NOT NULL,
  `salary` DECIMAL(2) NULL,
  `department_id` INT NULL,
  PRIMARY KEY (`id`));

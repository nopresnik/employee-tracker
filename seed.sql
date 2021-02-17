INSERT INTO `employee-tracker`.`department` (`name`) VALUES ('Dep 1');
INSERT INTO `employee-tracker`.`department` (`name`) VALUES ('Dep 2');
INSERT INTO `employee-tracker`.`department` (`name`) VALUES ('Dep 3');

INSERT INTO `employee-tracker`.`employee`
(`first_name`,`last_name`,`role_id`,`manager_id`)
VALUES
('Employee','One',1,null);

INSERT INTO `employee-tracker`.`employee`
(`first_name`,`last_name`,`role_id`,`manager_id`)
VALUES
('Employee','Two',2,1);

INSERT INTO `employee-tracker`.`employee`
(`first_name`,`last_name`,`role_id`,`manager_id`)
VALUES
('Employee','Three',3,2);

INSERT INTO `employee-tracker`.`role`
(`title`,`salary`,`department_id`)
VALUES
('Role 1', 50000, 1);

INSERT INTO `employee-tracker`.`role`
(`title`,`salary`,`department_id`)
VALUES
('Role 2', 100000, 2);

INSERT INTO `employee-tracker`.`role`
(`title`,`salary`,`department_id`)
VALUES
('Role 3', 150000, 3);
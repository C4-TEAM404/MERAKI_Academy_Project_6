-- ====================================================//Drop DataBase
Drop Database if exists HEX;

-- ====================================================//Create DataBase

CREATE Database HEX;

-- ====================================================//Use DataBase

Use HEX;

-- ====================================================//Create Role Table

Create Table role(
    id int not null AUTO_INCREMENT primary key,
    Name varchar(255),
    isDeleted TINYINT Default 0
);

-- ====================================================//Create Admin Table

Create Table admin(
     id int not null auto_increment primary key,
     firstName varchar(255),
     lastName varchar(255),
     phone varchar(255),
     email varchar(255),
     password varchar(255),
     roleId int not null,
     FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE

);

-- ====================================================//Create Teacher Table
 
Create Table teacher(
    id int not null auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
    phone varchar(255),
    email varchar(255),
    password varchar(255),
    isDeleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE


);

-- ====================================================//Create Course Table


Create Table course(
    id int not null auto_increment primary key,
    Title varchar(255),
    Description varchar(255),
    Price varchar(255),
    language varchar(255),
    Schedule varchar(255),
    Author varchar(255),
    Requirements varchar(255),
    Category varchar(255),
    isDeleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE


);

-- ====================================================//Create Course Table

 
Create Table Student(
    id int not null auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
    phone varchar(255),
    email varchar(255),
    courseId  int,
    password varchar(255),
    isDeleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(courseId ) REFERENCES course(id) ON DELETE CASCADE ON UPDATE CASCADE
);
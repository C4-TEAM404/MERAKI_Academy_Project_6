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
    is_deleted TINYINT Default 0
);

-- ====================================================//Insert data Role Table

Insert into role (Name) Value ('Admin');
Insert into role (Name) Value ("Teacher");
Insert into role (Name) Value ("Student");


-- ====================================================//Create Admin Table

Create Table admin(
     id int not null auto_increment primary key,
     firstName varchar(255),
     lastName varchar(255),
     phone varchar(255),
     email varchar(255),
     password varchar(255),
     roleId int not null,
     is_deleted TINYINT Default 0,
     FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE

);


-- ====================================================//Insert data Admin Table

Insert into admin ()

-- ====================================================//Create Teacher Table
 
Create Table teacher(
    id int not null auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
    phone varchar(255) unique,
    email varchar(255) unique,
    password varchar(255),
    is_deleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE


);


-- ====================================================//Insert data Teacher Table

Insert into teacher (firstName, lastName, phone, email, password, roleId) Values ('Ghaidaa','Sleeman','0001','Ghaidaa@Gmail.com','$2b$10$SuQ4yZuFdnYjCVvaZPjZkeHNqMiVmk.RIe6PEjFrER78HawdV9WSS',2);
Insert into teacher (firstName, lastName, phone, email, password, roleId) Values ('Bayan','Safadi','0002','Bayan@Gmail.com','$2b$10$SuQ4yZuFdnYjCVvaZPjZkeHNqMiVmk.RIe6PEjFrER78HawdV9WSS',2);
Insert into teacher (firstName, lastName, phone, email, password, roleId) Values ('mai','Yusuf','0003','mai@Gmail.com','$2b$10$SuQ4yZuFdnYjCVvaZPjZkeHNqMiVmk.RIe6PEjFrER78HawdV9WSS',2);



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
    Video varchar(255),
    is_deleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE


);


-- ====================================================//Insert data Course Table

Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,roleId) Values("Javascript","Dom&Jquery","50$","English","7-11 PM","Dainile The'","Knowing basic concept","software","https://youtu.be/gT0Lh1eYk78",2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,roleId) Values("Tenses","ELEMENT","50$","Espanish","7-11 PM","james Khose'"," basic concept","Language","https://youtu.be/9JSANnwYpBY",2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,roleId) Values("Newton Second low","physics concepts","50$","Arabic","7-11 PM","Ghaidaa Sleeman"," basic concept","sciences","https://youtu.be/miA_Jfin2Qg",2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,roleId) Values("Javascript","Dom&Jquery","50$","English","7-11 PM","Dainile The'","Knowing basic concept","software","https://youtu.be/gT0Lh1eYk78",2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,roleId) Values("Tenses","ELEMENT","50$","Espanish","7-11 PM","james Khose'"," basic concept","Language","https://youtu.be/9JSANnwYpBY",2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,roleId) Values("Newton Second low","physics concepts","50$","Arabic","7-11 PM","Ghaidaa Sleeman"," basic concept","sciences","https://youtu.be/miA_Jfin2Qg",2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,roleId) Values("Javascript","Dom&Jquery","50$","English","7-11 PM","Dainile The'","Knowing basic concept","software","https://youtu.be/gT0Lh1eYk78",2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,roleId) Values("Tenses","ELEMENT","50$","Espanish","7-11 PM","james Khose'"," basic concept","Language","https://youtu.be/9JSANnwYpBY",2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,roleId) Values("Newton Second low","physics concepts","50$","Arabic","7-11 PM","Ghaidaa Sleeman"," basic concept","sciences","https://youtu.be/miA_Jfin2Qg",2);




-- ====================================================//Create Course Table

 
Create Table Student(
    id int not null auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
    phone varchar(255) unique,
    email varchar(255) unique,
    courseId  int,
    password varchar(255),
    is_deleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(courseId ) REFERENCES course(id) ON DELETE CASCADE ON UPDATE CASCADE
);
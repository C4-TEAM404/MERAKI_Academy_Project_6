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

Insert into admin (firstName, lastName, phone, email, password, roleId) Values ('Omar'," Kata'a ",'1000','Omar@Gmail.com','$2b$10$SuQ4yZuFdnYjCVvaZPjZkeHNqMiVmk.RIe6PEjFrER78HawdV9WSS',1);

-- ====================================================//Create Teacher Table
 
Create Table teacher(
    id int not null auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
    phone varchar(255) unique,
    email varchar(255) unique,
    password varchar(255),
    profileImage varchar(255),
    is_deleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE


);


-- ====================================================//Insert data Teacher Table

Insert into teacher (firstName, lastName, phone, email, password,profileImage,roleId) Values ('Ghaidaa','Sleeman','0001','Ghaidaa@Gmail.com','$2b$10$SuQ4yZuFdnYjCVvaZPjZkeHNqMiVmk.RIe6PEjFrER78HawdV9WSS',"https://cdn4.vectorstock.com/i/1000x1000/35/53/person-icon-female-user-profile-avatar-vector-18833553.jpg",2);
Insert into teacher (firstName, lastName, phone, email, password,profileImage,roleId) Values ('Bayan','Safadi','0002','Bayan@Gmail.com','$2b$10$SuQ4yZuFdnYjCVvaZPjZkeHNqMiVmk.RIe6PEjFrER78HawdV9WSS',"https://cdn4.vectorstock.com/i/1000x1000/35/53/person-icon-female-user-profile-avatar-vector-18833553.jpg",2);
Insert into teacher (firstName, lastName, phone, email, password,profileImage,roleId) Values ('mai','Yusuf','0003','mai@Gmail.com','$2b$10$SuQ4yZuFdnYjCVvaZPjZkeHNqMiVmk.RIe6PEjFrER78HawdV9WSS',"https://cdn4.vectorstock.com/i/1000x1000/35/53/person-icon-female-user-profile-avatar-vector-18833553.jpg",2);



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
    image varchar(255),
    room_Id varchar(255),
    teacher_Id int not null,
    is_deleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(teacher_Id) REFERENCES teacher(id) ON DELETE CASCADE ON UPDATE CASCADE


);

-- ====================================================//Insert data Course Table

Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image,room_Id,
    teacher_Id,roleId) Values("Javascript","Dom&Jquery","50$","English","7-11 PM","Dainile The'","Knowing basic concept","software","https://youtu.be/gT0Lh1eYk78","https://i.imgur.com/6xrqbvr.jpg",null,1,2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image,room_Id,
    teacher_Id,roleId) Values("Tenses","ELEMENT","50$","Espanish","7-11 PM","james Khose'"," basic concept","Language","https://youtu.be/9JSANnwYpBY","https://i.imgur.com/6xrqbvr.jpg",null,1,2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image,room_Id,
    teacher_Id,roleId) Values("Newton Second low","physics concepts","50$","Arabic","7-11 PM","Ghaidaa Sleeman"," basic concept","sciences","https://youtu.be/miA_Jfin2Qg","https://i.imgur.com/6xrqbvr.jpg",null,1,2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image,room_Id,
    teacher_Id,roleId) Values("Javascript","Dom&Jquery","50$","English","7-11 PM","Dainile The'","Knowing basic concept","software","https://youtu.be/gT0Lh1eYk78","https://i.imgur.com/6xrqbvr.jpg",null,1,2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image,room_Id,
    teacher_Id,roleId) Values("Tenses","ELEMENT","50$","Espanish","7-11 PM","james Khose'"," basic concept","Language","https://youtu.be/9JSANnwYpBY","https://i.imgur.com/6xrqbvr.jpg",null,1,2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image,room_Id,
    teacher_Id,roleId) Values("Newton Second low","physics concepts","50$","Arabic","7-11 PM","Ghaidaa Sleeman"," basic concept","sciences","https://youtu.be/miA_Jfin2Qg","https://i.imgur.com/6xrqbvr.jpg",null,1,2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image,room_Id,
    teacher_Id,roleId) Values("Javascript","Dom&Jquery","50$","English","7-11 PM","Dainile The'","Knowing basic concept","software","https://youtu.be/gT0Lh1eYk78","https://i.imgur.com/6xrqbvr.jpg",null,1,2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image,room_Id,
    teacher_Id,roleId) Values("Tenses","ELEMENT","50$","Espanish","7-11 PM","james Khose'"," basic concept","Language","https://youtu.be/9JSANnwYpBY","https://i.imgur.com/6xrqbvr.jpg",null,1,2);
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image,room_Id,
    teacher_Id,roleId) Values("Newton Second low","physics concepts","50$","Arabic","7-11 PM","Ghaidaa Sleeman"," basic concept","sciences","https://youtu.be/miA_Jfin2Qg","https://i.imgur.com/6xrqbvr.jpg",null,1,2);




-- ====================================================//Create Course Table

 
Create Table Student(
    id int not null auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
    phone varchar(255) unique,
    email varchar(255) unique,
    courseId  int,
    password varchar(255),
    profileImage varchar(255),
    is_deleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(courseId ) REFERENCES course(id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- ====================================================//Insert data Teacher Table

Insert into Student (firstName, lastName, phone, email, password, roleId) Values ('Zakaria','Humaide','1001','Zakaria@Gmail.com','$2b$10$SuQ4yZuFdnYjCVvaZPjZkeHNqMiVmk.RIe6PEjFrER78HawdV9WSS',3);
Insert into Student (firstName, lastName, phone, email, password, roleId) Values ('Osama','Ajoury','1002','Osama@Gmail.com','$2b$10$SuQ4yZuFdnYjCVvaZPjZkeHNqMiVmk.RIe6PEjFrER78HawdV9WSS',3);
Insert into Student (firstName, lastName, phone, email, password, roleId) Values ('Amer','Abbadi','1003','Amer@Gmail.com','$2b$10$SuQ4yZuFdnYjCVvaZPjZkeHNqMiVmk.RIe6PEjFrER78HawdV9WSS',2);

-- ====================================================//Create User-Course Table


Create Table user_courses(

    id int not null auto_increment primary key,
    studentId int,
    teacher_Id int,
    courseId int,
    is_deleted TINYINT Default 0,
    FOREIGN Key(studentId) REFERENCES Student(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(teacher_Id) REFERENCES teacher(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(courseId) REFERENCES course(id) ON DELETE CASCADE ON UPDATE CASCADE

);

-- ====================================================//Insert data user_courses Table


Insert into user_courses (studentId,teacher_Id,courseId) Values (1,1,1);
Insert into user_courses (studentId,teacher_Id,courseId) Values (1,1,2);
Insert into user_courses (studentId,teacher_Id,courseId) Values (1,1,3);
Insert into user_courses (studentId,teacher_Id,courseId) Values (2,1,1);
Insert into user_courses (studentId,teacher_Id,courseId) Values (2,2,2);
Insert into user_courses (studentId,teacher_Id,courseId) Values (2,2,3);
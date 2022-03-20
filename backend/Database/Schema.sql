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
    Description varchar(1000),
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
    start varchar(255),
    is_deleted TINYINT Default 0,
    roleId int not null,
    FOREIGN Key(roleId) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(teacher_Id) REFERENCES teacher(id) ON DELETE CASCADE ON UPDATE CASCADE


);

-- ====================================================//Insert data Course Table

Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("JavaScript Introduction","JavaScript lets you add interactive features to your Web sites, including dynamically updated content, controlled multimedia, animated images, and much more. Developed in partnership between W3C and University Côte d'Azur, this introductory course has been designed to help Web developers have an understanding of the basic concepts of the language.","50","English","7-11 PM",'Ghaidaa Sleeman',"High school level studies An interest in learning the basics of programming with JavaScript","Basic","https://www.youtube.com/embed/z6VgvL9WeGY","https://prod-discovery.edx-cdn.org/media/course/image/c50943b5-3375-4d50-9f91-911930551603-5703bb2a02c8.small.png", "Mar 18",null,1,2);
   
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("The Complete JavaScript Course 2022: From Zero to Expert!","JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides millions of high-paying jobs all over the world.That's why you want to learn JavaScript too. And you came to the right place!","14","English","5-9 PM","Jonas Schmedtmann"," A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.","Basic","https://www.youtube.com/embed/vDQ9GZsJkms","https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg","Feb 20",null,2,2);


Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("JavaScript - The Complete Guide 2022 (Beginner + Advanced)","JavaScript is THE most important programming language you need to learn as a web developer - and with this course, you make sure that you will not miss a single thing you have to know as a JavaScript developer!","15","English","2-5 PM","David M."," Basic understanding of HTML and CSS helps but is NOT required","Basic","https://www.youtube.com/embed/DHjqpvDnNGE","https://img-b.udemycdn.com/course/240x135/2508942_11d3_3.jpg", "Mar 10",null,2,2);
 
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("Modern JavaScript From The Beginning","This is a front to back JavaScript course for absolutely everybody. We start with the basic fundamentals and work our way to advanced programming WITHOUT relying on frameworks or libraries at all. You will learn a ton of pure JavaScript, whether you are a beginner or an established JS programmer. There is something for everyone...","15","English","7-11 PM","Ghaidaa Sleeman","Basic HTML / CSS knowledge","Basic","https://www.youtube.com/embed/rNmxANyH0BU","https://img-c.udemycdn.com/course/240x135/1463348_52a4_2.jpg", "Mar 7",null,1,2);


Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("The Complete 2022 Web Development Bootcamp","Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of HEX!","14","English","8-11 PM","Dr. Angela Yu"," I'll walk you through, step-by-step how to get all the software installed and set up","Basic","https://www.youtube.com/embed/MM6TjxrmvoU?list=PLmv0h_u-BMKtON5uMdSz4_4zwnd2gyXNq","https://img-c.udemycdn.com/course/240x135/1565838_e54e_15.jpg","Mar 20",null,2,2);

-- frontend========================================

Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("React - The Complete Guide (incl Hooks, React Router, Redux)","This course is the most up-to-date, comprehensive and bestselling React course on HEX! It was completely updated and re-recorded from the ground up - it teaches the very latest version of React with all the core, modern features you need to know!","14","English","7-11 PM","Ghaidaa Sleeman"," avaScript + HTML + CSS fundamentals are absolutely required","Frontend","https://www.youtube.com/embed/JPT3bFIwJYA?list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS","https://img-b.udemycdn.com/course/240x135/1362070_b9a1_2.jpg", "Jun 10",null,1,2);


Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)","Just updated and re-recorded with all new React features for 2022 (React v17..and soon v18)! Join a live online community of over 600,000+ developers and a course taught by industry experts that have actually worked both in Silicon Valley and Toronto with React.js.","14","English","7-11 PM","Andrei Neagoie","Basic HTML, CSS and JavaScript knowledge, You do not need any experience with React or any other JS framework!","Frontend","https://www.youtube.com/embed/G3g_CcWjXjI","https://img-c.udemycdn.com/course/240x135/2365628_0b60_9.jpg", "Jun 20",null,2,2);

  
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("React Front To Back 2022","This course is for anyone that wants to learn React and also for React developers looking to build some projects and sharpen their skills.","14","English","7-11 PM","Brad Traversy"," you should know JavasScript pretty well before learning React or any framework","Frontend","https://www.youtube.com/embed/p6c7QA9ofvI"," https://img-c.udemycdn.com/course/480x270/4427730_5388.jpg", "May 5",null,2,2);
    
Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("React Tutorial and Projects Course","React was released by Facebook's web development team in 2013 as a view library. React is one of the best choices for building modern web applications. React has a slim API, a robust and evolving ecosystem and a great community. In this course we will be learning React by creating various projects","14","English","7-11 PM","John Smilga"," Strong Knowledge of HTML, CSS, JS is Required. ES6 is optional.","Frontend","https://www.youtube.com/embed/nb5d_L-InJo","https://img-b.udemycdn.com/course/240x135/2018828_41a9_3.jpg","April 10",null,2,2);

    -- backend=======================================


-- 

Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("The Complete Node.js Developer Course (3rd Edition)","The Complete Node.js Developer Course covers the fundamentals of Node before diving deep into great tools like Express, Mongoose, and MongoDB. The entire course is based around a single goal: Turning you into a professional Node developer capable of developing, testing, and deploying real-world production applications.","15","English","7-11 PM","Andrew Mead"," A computer on which you can install software (Windows, MacOS, or Linux) A basic understanding of JavaScript (variables, functions, objects, arrays, if statements)","Backend","https://www.youtube.com/embed/xYzps_kOuEQ","https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg","April 1",null,3,2);
    
    Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)","Using the latest version of Node, this course is focused on efficiency and turning you into a Back End or Fullstack developer. Never spend time on confusing, out of date, incomplete tutorials anymore! Graduates of Andrei’s courses are now working at Google, Tesla, Amazon, Apple, IBM, JP Morgan, Facebook, + other top tech companies for a reason.","14","English","5-9 PM","Andrei Neagoie","Just basic JavaScript knowledge You DO NOT need any prior experience with NodeJS! You DO NOT need any prior Backend Development knowledge!","Backend","https://www.youtube.com/embed/pFJR4hdVDtk","https://img-c.udemycdn.com/course/240x135/3616978_b3f2_4.jpg","Mar 10",null,3,2);

    
    Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("Node.js REST API with Express & MongoDB - Solid Architecture","Want to learn how to build REST API with Nodejs, Express, and MongoDB ?? If yes, then this course is for you. In this course you will learn how to create MVC pattern REST API architecture in Nodejs, communication with MongoDB using Mongoose, Securing API with JWT ( JSON web token) and documenting API using popular open-source tool called swagger.","15","English","7-11 PM","RapidDev Pro","Very basic understanding of Javascript","Backend","https://www.youtube.com/embed/w-7RQ46RgxU?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp","https://img-c.udemycdn.com/course/240x135/2017822_0840_17.jpg","April 15",null,3,2);

    -- 
    Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("NodeJS Tutorial and Projects Course","NodeJS was created in 2009 and it's built on top of Chrome's V8 Javascript Engine. As you are probably aware of, every browser has an engine, a tool that compiles our code down to machine code and Chrome uses one by the name of V8.","15","English","7-11 PM","John Smilga","Basic Knowledge of HTML, CSS, JS (ES6) is Required.","Backend","https://www.youtube.com/embed/pU9Q6oiQNd0","https://img-c.udemycdn.com/course/240x135/3830262_2c3b_3.jpg","April 10",null,3,2);

   
    Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("SQL - MySQL for Data Analytics and Business Intelligence","Well, when you can work with SQL, it means you don’t have to rely on others sending you data and executing queries for you. You can do that on your own. This allows you to be independent and dig deeper into the data to obtain the answers to questions that might improve the way your company does its business. For instance, Database management is the foundation for data analysis and intelligent decision making.","15","English","7-11 PM","Ghaidaa Sleeman","No prior experience is required. We will start from the very basics","Backend","https://www.youtube.com/embed/2bW3HuaAUcY","https://img-c.udemycdn.com/course/240x135/1405632_6e6f_2.jpg","April 10",null,1,2);

    -- 
    Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("SQL for Beginners: Learn SQL using MySQL and Database Design","SQL (Structured Query Language - very much an in-demand technology). MySQL (one of the worlds most popular and widely used databases.Database Design, Data Analysis The database design section (normalization and relationships) isn't covered in the majority of SQL courses on Udemy.  You will struggle to find another MySQL course that has a section on this.This section alone, will give you a huge edge over other applicants for jobs.","14","English","7-11 PM","Tim Buchalka's Learn Programming Academy","A PC (Windows or Linux) or Mac is required No prior knowledge of Databases, SQL or MySQL is needed.","Backend","https://www.youtube.com/embed/eTdztltdOb0","https://img-c.udemycdn.com/course/240x135/1419182_b2cf.jpg","April 5",null,3,2);

    -- 
    Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("SQL for Data Analysis: Beginner MySQL Business Intelligence","In this course, you’ll play the role of a business owner who just acquired Maven Movies, a brick and mortar DVD rental shop. Using only a MySQL database and MySQL Workbench, your mission is to learn everything that you can about your new business; including your inventory, staff, and customer behavior.","31","English","7-11 PM","Maven Analytics","MySQL Workbench and Community Server for Mac or Windows/PC (we’ll walk you through the free install process)Basic understanding of database fundamentals encouraged, but not required","Backend","https://www.youtube.com/embed/coj4_GohP4o","https://img-b.udemycdn.com/course/240x135/2422318_79c1_5.jpg","April 1",null,3,2);
   
--   
    
    Insert into course (Title,Description,Price,language,Schedule,Author,Requirements,Category,Video,image, start ,room_Id,
    teacher_Id,roleId) Values("Complete SQL and Databases Bootcamp: Zero to Mastery ","The curriculum is going to be very hands on as we walk you from start to finish of working with databases and SQL, all the way into learning how to scale databases, how to manage them, and even bonus material on working with Big Data, Caching using Redis, and connecting PostgreSQL to a Node.js server.","14","English","7-11 PM","Andrei Neagoie","No prior tech experience is required. We will start from absolute zero! You can use ANY operating system with this course: Windows, macOS, Linux. All users are all welcome!Get ready to do tons of exercises and learn to love Databases and SQL!","Backend","https://www.youtube.com/embed/ybDul91h7Gc","https://img-c.udemycdn.com/course/240x135/2851942_0cb0_3.jpg","April 13",null,3,2);



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
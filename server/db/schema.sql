
CREATE TABLE staff (
  name varchar(50) NOT NULL,
  title varchar(50) NOT NULL,
  pictureFile varchar(50),
  admin boolean,
  email varchar(50) NOT NULL,
  hashedPassword varchar(50) NOT NULL,
  firstJoined date NOT NULL,
  latestDeparture date,
  PRIMARY KEY (ID)
);

CREATE TABLE students (
  name varchar(50) NOT NULL,
  pictureFile varchar(50),
  grade_id integer FOREIGN KEY,
  email varchar(50),
  homeless boolean,
  fosterCare boolean,
  currently enrolled boolean,
  firstJoined date NOT NULL,
  latestDeparture date,
  IEPLink varchar(50),
  PRIMARY KEY (ID)
);

CREATE TABLE courses (
  name varchar(50) NOT NULL,
  grade_id integer FOREIGN KEY,
  credits decimal (3, 2) NOT NULL,
  honors boolean,
  deparment_id integer FOREIGN KEY,
  semester_id integer FOREIGN KEY,
  PRIMARY KEY (ID)
);

CREATE TABLE gradeLevels (
  name varchar(50) NOT NULL,
  admin_id varchar(50) FOREIGN KEY,
  PRIMARY KEY (ID)
);

CREATE TABLE deparments (
  name varchar(50) NOT NULL,
  admin varchar(50) FOREIGN KEY,
  PRIMARY KEY (ID)
);

CREATE TABLE semesters (
  name varchar(50) NOT NULL,
  admin varchar(50) FOREIGN KEY,
  PRIMARY KEY (ID)
);

CREATE TABLE staff (
  name varchar(50) NOT NULL,
  title varchar(50) NOT NULL,
  pictureFile varchar(50) NOT NULL,
  admin boolean,
  email varchar(50) NOT NULL,
  hashedPassword varchar(50) NOT NULL,
  firstJoined date NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE students (
  name varchar(50) NOT NULL,
  title varchar(50) NOT NULL,
  pictureFile varchar(50) NOT NULL,
  admin boolean,
  email varchar(50) NOT NULL,
  hashedPassword varchar(50) NOT NULL,
  firstJoined date NOT NULL,
  PRIMARY KEY (ID)
);
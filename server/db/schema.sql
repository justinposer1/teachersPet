
CREATE TABLE messages (
  /* Describe your table here.*/

  id serial,
  userid int NOT NULL,
  text varchar(200) NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);
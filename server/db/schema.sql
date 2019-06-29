
CREATE TABLE staff (
  name varchar(50) NOT NULL,
  title varchar(50) NOT NULL,
  pictureFile varchar(50),
  admin boolean,
  email varchar(50) NOT NULL,
  hashedPassword varchar(50) NOT NULL,
  firstJoined date NOT NULL,
  latestDeparture date,
  deparment_id integer FOREIGN KEY references departments (id),
  id serial PRIMARY KEY
);

CREATE TABLE students (
  name varchar(50) NOT NULL,
  pictureFile varchar(50),
  grade_id integer FOREIGN KEY references gradeLevels (id),
  email varchar(50),
  homeless boolean,
  inFosterCare boolean,
  currently enrolled boolean,
  firstJoined date NOT NULL,
  latestDeparture date,
  IEPLink varchar(50),
  id serial PRIMARY KEY
);

CREATE TABLE courses (
  name varchar(50) NOT NULL,
  grade_id integer FOREIGN KEY references gradeLevels (id),
  credits decimal (3, 2) NOT NULL,
  honors boolean,
  deparment_id integer FOREIGN KEY references departments (id),
  semester_id integer FOREIGN KEY references semesters (id),
  id serial PRIMARY KEY
);

CREATE TABLE gradeLevels (
  level integer NOT NULL,
  admin_id integer FOREIGN KEY references staff (id),
  id serial PRIMARY KEY
);

CREATE TABLE deparments (
  name varchar(50) NOT NULL,
  admin_id integer FOREIGN KEY references staff (id),
  id serial PRIMARY KEY
);

CREATE TABLE semesters (
  startDate date NOT NULL,
  endDate date NOT NULL,
  admin_id integer FOREIGN KEY references staff (id),
  id serial PRIMARY KEY
);

CREATE TABLE notes (
  name varchar(50) NOT NULL,
  text varchar(500),
  staff_id integer FOREIGN KEY references staff (id),
  student_id integer FOREIGN KEY references students (id),
  private boolean,
  flagged boolean,
  archived boolean,
  id serial PRIMARY KEY
);

CREATE TABLE grades (
  student_id integer FOREIGN KEY references students (id),
  course_id integer FOREIGN KEY courses references courses (id),
  grade decimal (3, 2),
  commentsLink varchar(50),
  id serial PRIMARY KEY
);

CREATE TABLE staff_students (
  staff_id integer FOREIGN KEY references staff (id),
  students_id integer FOREIGN KEY references studentss (id),
  id serial PRIMARY KEY
);

CREATE TABLE staff_gradeLevels (
  staff_id integer FOREIGN KEY references staff (id),
  gradeLevel_id integer FOREIGN KEY references gradeLevels (id),
  id serial PRIMARY KEY
);

CREATE TABLE staff_courses (
  staff_id integer FOREIGN KEY references staff (id),
  course_id integer FOREIGN KEY references courses (id),
  id serial PRIMARY KEY
);

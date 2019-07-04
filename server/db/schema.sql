
CREATE TABLE departments (
  name varchar(50) NOT NULL,
  id serial PRIMARY KEY
);

CREATE TABLE staff (
  name varchar(50) NOT NULL,
  title varchar(50),
  pictureFile varchar(50),
  admin boolean,
  email varchar(50) NOT NULL,
  hashedPassword varchar(100) NOT NULL,
  firstJoined date NOT NULL,
  latestDeparture date,
  department_id integer references departments (id),
  id serial PRIMARY KEY
);

CREATE TABLE gradeLevels (
  level integer NOT NULL,
  admin_id integer references staff (id),
  id serial PRIMARY KEY
);

CREATE TABLE semesters (
  startDate date NOT NULL,
  endDate date NOT NULL,
  id serial PRIMARY KEY
);

CREATE TABLE students (
  name varchar(50) NOT NULL,
  pictureFile varchar(50),
  grade_id integer references gradeLevels (id),
  email varchar(50),
  currentlyEnrolled boolean,
  firstJoined date NOT NULL,
  latestDeparture date,
  IEPLink varchar(50),
  id serial PRIMARY KEY
);

CREATE TABLE courses (
  name varchar(50) NOT NULL,
  grade_id integer references gradeLevels (id),
  credits numeric (3, 2),
  honors boolean,
  deparment_id integer references departments (id),
  semester_id integer references semesters (id),
  id serial PRIMARY KEY
);

CREATE TABLE notes (
  name varchar(50) NOT NULL,
  text varchar(500),
  staff_id integer references staff (id),
  student_id integer references students (id),
  private boolean,
  flagged boolean,
  archived boolean,
  id serial PRIMARY KEY
);

CREATE TABLE grades (
  student_id integer references students (id),
  course_id integer references courses (id),
  grade numeric (3, 2),
  commentsLink varchar(50),
  id serial PRIMARY KEY
);

CREATE TABLE messages (
  sender_id integer references staff (id),
  recipient_id integer references staff (id),
  subjectLine varchar(50),
  text varchar(500),
  id serial PRIMARY KEY
);

CREATE TABLE tags (
  text varchar(20),
  id serial PRIMARY KEY
);

CREATE TABLE staff_students (
  staff_id integer references staff (id),
  students_id integer references students (id),
  id serial PRIMARY KEY
);

CREATE TABLE staff_gradeLevels (
  staff_id integer references staff (id),
  gradeLevel_id integer references gradeLevels (id),
  id serial PRIMARY KEY
);

CREATE TABLE staff_courses (
  staff_id integer references staff (id),
  course_id integer references courses (id),
  id serial PRIMARY KEY
);

CREATE TABLE students_tags (
  student_id integer references students (id),
  tag_id integer references tags (id),
  id serial PRIMARY KEY
);

ALTER TABLE departments add column admin_id integer references staff (id);
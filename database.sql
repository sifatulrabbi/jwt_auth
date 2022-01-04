CREATE DATABASE practice_db_jwt;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  created_at VARCHAR(50) NOT NULL,
  updated_at VARCHAR(50) NOT NULL,
  username VARCHAR(80) NOT NULL,
  password VARCHAR(80) NOT NULL
);

CREATE TABLE sessions(
  token_id SERIAL PRIMARY KEY,
  token TEXT NOT NULL,
  i_at VARCHAR(50) NOT NULL,
  exp_at VARCHAR(50) NOT NULL
);
DROP DATABASE IF EXISTS petpedia;
CREATE DATABASE petpedia;

\c petpedia;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  phonenumber INT NOT NULL
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  owner INT REFERENCES users(id) NOT NULL,
  type VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  age INT
);

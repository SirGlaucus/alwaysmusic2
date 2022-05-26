CREATE DATABASE alwaysmusic;

-- \c alwaysmusic

CREATE TABLE alumnos (nombre VARCHAR(25) NOT NULL, rut VARCHAR(11) PRIMARY KEY, curso VARCHAR(25) NOT NULL, nivel SMALLINT NOT NULL);


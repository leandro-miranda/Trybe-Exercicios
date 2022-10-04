DROP DATABASE IF EXISTS todolistdb;

CREATE DATABASE todolistdb;

USE todolistdb;

CREATE TABLE tasks (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

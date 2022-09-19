-- Busque por todos os primeiros e últimos nomes da tabela ator e dê o apelido de “Nome Completo”
USE sakila;
SELECT 
    CONCAT(first_name, ' ', last_name) AS 'Nome Completo'
FROM
    sakila.actor;
    
-- Busque por todos os filmes e mostre os dados de nome (NOME DO FILME),
-- duração (DURAÇÃO EM MINUTOS) e classificação (CLASSIFICAÇÃO DO FILME)
USE sakila;
SELECT 
    title AS 'NOME DO FILME',
    rental_rate AS 'DURAÇÃO EM MINUTOS',
    length AS 'CLASSIFICAÇÃO DO FILME'
FROM
    film;
    
-- Busque todos primeiros e últimos nomes e email das pessoas na tabela customer 
-- e monte o seguinte retorno com o nome de Pessoa: Nome Completo: Felipe Nunes | Email: teste@teste.com
USE sakila;
SELECT 
    CONCAT('Nome completo: ',
            first_name,
            ' ',
            last_name,
            ' | E-mail: ',
            email) AS Pessoa
FROM
    sakila.customer;
    
-- Busque por todos os primeiros nomes da tabela ator
SELECT 
    first_name
FROM
    sakila.actor;

-- Busque por todos os primeiros nomes da tabela ator sem haver nomes repetidos
SELECT DISTINCT
    first_name
FROM
    sakila.actor;

-- Busque todos os distritos da tabela address sem haver repetição
SELECT DISTINCT
    district
FROM
    sakila.address;

-- Busque todos endereços e distritos da tabela address sem haver repetição
SELECT DISTINCT
    address, district
FROM
    sakila.address;

-- Retorne o total de filmes na tabela film
SELECT 
    COUNT(*)
FROM
    sakila.film;

-- Retorne o total de códigos postal da tabela address
SELECT 
    COUNT(postal_code)
FROM
    sakila.address;

-- Retorne o total de address_id da tabela address
SELECT 
    COUNT(address_id)
FROM
    sakila.address;

-- Retorne o total de address2 da tabela address
SELECT 
    COUNT(address2)
FROM
    sakila.address;

-- Retorne os dados da tabela city a partir da cidade de Alessandria e limitado em 100 registros no máximo
SELECT 
    *
FROM
    sakila.city
LIMIT 100 OFFSET 16;

-- Retorne os 25 primeiros filmes da tabela film
SELECT 
    *
FROM
    sakila.film
LIMIT 25;

-- Retorne o primeiro e último nome da tabela actor em ordem crescente do primeiro nome
SELECT 
    first_name, last_name
FROM
    sakila.actor
ORDER BY first_name;

-- Retorne o primeiro e último nome da tabela actor em ordem decrescente
-- do último nome
SELECT 
    first_name, last_name
FROM
    sakila.actor
ORDER BY last_name DESC;

-- Retorne o primeiro e último nome da tabela actor em ordem crescente do
-- primeiro nome e decrescente do último nome
SELECT 
    first_name, last_name
FROM
    sakila.actor
ORDER BY first_name ASC , last_name DESC;
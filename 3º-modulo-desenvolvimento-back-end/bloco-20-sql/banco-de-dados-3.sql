-- Faça a inserção um registro na tabela staff
INSERT INTO `sakila`.`staff` (first_name, last_name, address_id, email,
store_id, active, username, password) VALUES ('Felipe', 'Nunes', 1,
'felipe.nunes@betrybe.com', 1, 1, 'nunesfb', '12345678');

-- Faça a inserção de três registros na tabela
INSERT INTO `sakila`.`city` (`city`, `country_id`) VALUES ('São Paulo', 15), ('Rio de Janeiro', 15), ('Bahia', 15);
SELECT 
    *
FROM
    sakila.city
WHERE
    country_id = 15;
    
-- Insira um registro na tabela staff
INSERT INTO `sakila`.`staff` (`first_name`, `last_name`, `address_id`,
`email`, `store_id`, `active`, `username`, `password`) VALUES ('julia',
'souza', 11, 'julia.souza@teste.com', 2, 1, 'julia', '12345678');
SELECT 
    *
FROM
    sakila.staff
WHERE
    first_name = 'julia';
    
-- Busque por todas pessoas na tabela customer cujo primeiro nome inicia com a letra B e insira o primeiro e último nome na tabela actor
INSERT INTO sakila.actor (first_name, last_name) SELECT first_name, last_name FROM sakila.customer WHERE first_name LIKE 'b%';
SELECT 
    first_name, last_name
FROM
    sakila.actor
WHERE
    first_name LIKE 'b%';
    
-- Atualize o release_year para 2009 e o language_id para 3 onde o length é maior que 150, o rating é PG-13 e o replacemente_cost é maior que 25
UPDATE sakila.film 
SET 
    release_year = 2009,
    language_id = 3
WHERE
    length > 150 AND rating = 'PG-13'
        AND replacement_cost > 25;
SELECT 
    *
FROM
    sakila.film
WHERE
    length > 150 AND rating = 'PG-13'
        AND replacement_cost > 25;
        
SET SQL_SAFE_UPDATES = 0;

-- Faça o update do replacement cost para 30.99 quando o rental_rate estiver entre 1 e 3, quando o length for maior que 150, mude para 35.99 e quando o length for menor ou igual a 82, mude para 20.33
UPDATE sakila.film
SET replacement_cost = (
CASE
WHEN rental_rate BETWEEN
1 AND 3 THEN 30.99
WHEN length > 150 THEN
35.99
WHEN length <= 82 THEN
20.33
ELSE replacement_cost
END );
SELECT 
    *
FROM
    sakila.film
WHERE
    rental_rate BETWEEN 1 AND 3
        OR length > 150
        OR length <= 82;
        
SET SQL_SAFE_UPDATES = 0;

-- Faça a atualização da senha na tabela staff para os 5 últimos registros que sofreram atualização e que estão com cadastro ativo
UPDATE sakila.staff 
SET 
    password = 'FavorResetarSuaSenha123'
WHERE
    active = 1 ORDER BY last_update LIMIT 5;
SELECT 
    *
FROM
    sakila.staff
ORDER BY last_update;

SET SQL_SAFE_UPDATES = 0;

-- Atualização com SELECT
UPDATE sakila.city 
SET 
    city = (SELECT 
            title
        FROM
            sakila.film
        WHERE
            film_id = 1)
WHERE
    city_id = 1;
    
SET SQL_SAFE_UPDATES = 0;

-- Delete todas pessoas com nome JULIA BARRYMORE da tabela actor
DELETE FROM sakila.actor 
WHERE
    first_name = 'JULIA BARRYMORE';
SELECT 
    *
FROM
    sakila.film_actor
WHERE
    actor_id = 47;
DELETE FROM sakila.film_actor 
WHERE
    actor_id = 47;
DELETE FROM sakila.actor 
WHERE
    first_name = 'JULIA'
    AND last_name = 'BARRYMORE';
    
-- Delete todos roteiros que tenham al em algum lugar do título
DELETE FROM sakila.film_text 
WHERE
    title LIKE 'al%';
SELECT 
    *
FROM
    sakila.film_text
WHERE
    title LIKE 'al%';
    
-- Delete todos dados da tabela film_text 
SELECT 
    *
FROM
    sakila.film_text;
TRUNCATE sakila.film_text;

-- Delete com CASCADE
-- Vamos deletar o registro 1 de customer;
DELETE FROM sakila.payment 
WHERE
    customer_id = 1;-- Deletar as referências em payment
DELETE FROM sakila.rental 
WHERE
    customer_id = 1;-- Deletar as referências em rental
DELETE FROM sakila.customer 
WHERE
    customer_id = 1; -- Então, deletar o customer
    
-- Adicione os dois principais atores do novo filme Matrix na tabela actor;
INSERT INTO sakila.actor (first_name, last_name) VALUES ('Keanu', 'Reeves'), ('Carrie-Ann', 'Moss');

-- Adicione o filme Matrix 4 na tabela film;
INSERT INTO `sakila`.`film`(`title`, `description`, `release_year`, `language_id`, `original_language_id`, `rental_duration`, 
`rental_rate`, `length`, `replacement_cost`, `rating`,`special_features`) 
VALUES ('Matrix Resurrections', 'Welcome to the matrix, is it illusion or is it reality?', 
2021, 1, 1, 3, 5.99, 168, 20.99, 'R', 'Commentaries,Deleted Scenes,Behind the Scenes');

-- Faça a ligação na tabela film_actor destes registros inseridos anteriormente;
INSERT INTO `sakila`.`film_actor`(`actor_id`, `film_id`) VALUES (201, 1001), (202, 1001);

-- Insira na tabela inventory um registro com o id deste filme para a loja com id igual a 1
INSERT INTO `sakila`.`inventory`(`film_id`, `store_id`) VALUES (1001, 1);

-- Crie você como pessoa usuária na tabela customer (faça a associação do seu cadastro com um registro já existente na tabela address);
INSERT INTO `sakila`.`customer`(`store_id`, `first_name`, `last_name`, `email`, `address_id`, `active`) 
VALUES (1, 'Rafa', 'Martins', 'rafa@martins.com', 10, 1);

-- Insira os dados de aluguel na tabela rental deste filme, como sendo realizado a retirada do filme no dia 25/04/2022;
INSERT INTO `sakila`.`rental` (`rental_date`, `inventory_id`, `customer_id`, `staff_id`) 
VALUES ('2022-04-25 15:00:00', 4582, 600, 1);

-- Faça a atualização com a devolução do filme no dia de hoje (26/04/2022) na tabela rental, no registro que foi inserido anteriormente (return_date)
UPDATE `sakila`.`rental` 
SET 
    `return_date` = '2022-04-26 15:00:00'
WHERE
    `rental_id` = 16050;

-- Faça o delete lógico do seu usuário (update) na tabela customer (mudar o status de active para 0);
UPDATE `sakila`.`customer` 
SET 
    `active` = 0
WHERE
    `customer_id` = 600;
    
-- Bônus: deletar todos registros inseridos anteriormente
DELETE FROM `sakila`.`film_actor` 
WHERE
    `film_id` = 1001;
DELETE FROM `sakila`.`inventory` 
WHERE
    `film_id` = 1001;
DELETE FROM `sakila`.`film` 
WHERE
    `film_id` = 1001;
DELETE FROM `sakila`.`rental` 
WHERE
    `customer_id` = 600;
DELETE FROM `sakila`.`customer` 
WHERE
    `customer_id` = 600;
DELETE FROM `sakila`.`actor` 
WHERE
    `actor_id` IN (201 , 202);
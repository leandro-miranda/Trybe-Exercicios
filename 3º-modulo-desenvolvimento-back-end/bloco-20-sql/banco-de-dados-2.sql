-- Busque todos os filmes da tabela film onde o rating é igual a ‘nc-17’
SELECT 
    *
FROM
    sakila.film
WHERE
    rating = 'nc-17';
    
-- Busque todos os filmes da tabela film onde o rental_duration é igual a 6
SELECT 
    *
FROM
    sakila.film
WHERE
    rental_duration = 6;
    
-- Busque todos os filmes com duração maior que 100 minutos e ordenados por tempo de duração
SELECT 
    *
FROM
    sakila.film
WHERE
    length > 100
ORDER BY length;

-- Busque todos os filmes que possuem replacement_cost menor ou igual a
-- 22.99 e ordenado por replacement_cost
SELECT 
    *
FROM
    sakila.filme
WHERE
    replacement_cost <= 22.99
ORDER BY replacement_cost;

-- Busque todos os atores cujo último nome é diferente NEESON e ordene pelo primeiro e último nome
SELECT 
    *
FROM
    sakila.actor
WHERE
    last_name <> 'NEESON'
ORDER BY first_name , last_name;

SELECT 
    *
FROM
    sakila.actor
WHERE
    NOT last_name = 'NEESON'
ORDER BY first_name , last_name;

-- Busque todos os clientes cuja situação é inativa
SELECT 
    *
FROM
    sakila.customer
WHERE
    active IS FALSE;
    
SELECT 
    *
FROM
    sakila.customer
WHERE
    active = 0;
    
-- Busque todos os filmes cujo rating é G, o replacement_cost é menor que 20 e a duração é menor ou igual a 100
SELECT 
    *
FROM
    sakila.film
WHERE
    rating = 'G' AND replacement_cost < 20
        AND length <= 100;
        
-- Busque todos filmes cujo rating é G ou o replacement_cost é menor que 20
SELECT 
    *
FROM
    sakila.film
WHERE
    rating = 'G' OR replacement_cost < 20;
    
-- Busque todos os filmes cujo título termina com ES
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%es';
    
-- Busque todos filmes que tem AT em algum lugar do título
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%at%';

-- Busque todos atores iniciam com SA e termina com DRA
SELECT 
    *
FROM
    sakila.actor
WHERE
    first_name LIKE 'sa%dra';
    
-- Busque todos atores que iniciam com JO
SELECT 
    *
FROM
    sakila.actor
WHERE
    first_name LIKE 'jo%';

-- Busque todos os atores que tem 3 letras aleatórias no primeiro nome e terminam com SE
SELECT 
    *
FROM
    sakila.actor
WHERE
    first_name LIKE '___se';
    
-- Busque todos os atores cujo primeiro nome inicia com a letra E e tem 4
-- letras após
SELECT 
    *
FROM
    sakila.actor
WHERE
    first_name LIKE 'e____';
    
-- Busque todos os atores que tem 1 letra aleatória, dois L e duas letras
-- aleatórias posteriormente no primeiro nome
SELECT 
    *
FROM
    sakila.actor
WHERE
    first_name LIKE '_ll__';

-- Busque todos os atores cujo primeiro nome é Jennifer, Matthew ou Johnny
SELECT 
    *
FROM
    sakila.actor
WHERE
    first_name IN ('Jennifer' , 'Matthew', 'Johnny');

-- Busque todos os filmes que tem entre 62 e 102 minutos de duração
SELECT 
    *
FROM
    sakila.film
WHERE
    length BETWEEN 62 AND 102
ORDER BY length;

-- Busque todos os pagamentos entre o dia primeiro e dia 31 de maio de 2005 e ordene por data crescente
SELECT 
    *
FROM
    sakila.payment
WHERE
    payment_date BETWEEN '2005-05- 01' AND '2005-05-31'
ORDER BY payment_date;

-- Busque todos filmes cujo título tem SI em seu primeiro nome e a classificação não é R e PG-13 e a nota é maior ou igual a 2.99
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%si%' AND NOT rating = 'R'
        AND NOT rating = 'PG-13'
        AND rental_rate >= 2.99;
        
-- Busque todos filmes cujo título tem SI em seu primeiro nome e a classificação não é R e PG-13 e a nota é maior ou igual a 2.99
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%si%' AND NOT rating = 'R'
        AND NOT rating = 'PG-13'
        AND rental_rate >= 2.99;
        
-- Busque todos pagamentos cujo rental_id é 13, 14, 15 ou 17 e a data de pagamento está entre 2005-05-25 e 2005-05-28
SELECT 
    *
FROM
    sakila.payment
WHERE
    payment_date BETWEEN '2005-05- 25' AND '2005-05-28'
        AND rental_id IN (13 , 14, 15, 17)
ORDER BY payment_date;

-- Busque todos pagamentos cujo customer_id é 55, 57 ou 60 e o mês é 07 e o dia é 31 e o amount é 5.99
SELECT 
    *
FROM
    sakila.payment
WHERE
    MONTH(payment_date) = 07
        AND DAY(payment_date) = 31
        AND customer_id IN (55 , 57, 60)
        AND amount = 5.99;
        
-- Busque todos os filmes cujo título tem EGG em alguma parte e o rating não é igual a PG e G
SELECT 
    *
FROM
    sakila.film
WHERE
    title LIKE '%egg%' AND NOT rating = 'PG'
        AND NOT rating = 'G';
        
-- Busque todos os filmes cujo título tem dd em alguma parte e o título também tem y em algum lugar e a duração está entre 80 e 120
SELECT * FROM sakila.film WHERE title LIKE '%dd%' AND title LIKE '%y%' AND length BETWEEN 80 AND 120;
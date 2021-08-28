SELECT UCASE('trybe');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'cadeia de Google');
SELECT LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13,10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

SELECT film_id, title,
IF(title = 'ACE GOLDFINGER', 'Já assistí o filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film

SELECT title, rating,
CASE
WHEN rating = 'G' THEN 'Livre para todos'
WHEN rating = 'PG' THEN  'Não recomendado para menores de 10 anos'
WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
ELSE 'Proibido para menores de idade'
END AS 'Público Alvo'
FROM sakila.film;


SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
SELECT 220 DIV(12)
SELECT 220 MOD(12)
SELECT ROUND(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);
SELECT DATEDIFF('2030-01-20', NOW());
SELECT TIMEDIFF('11:00:00', '10:25:45');
SELECT
AVG(length) AS 'Média de Duração',
MIN(length) AS 'Duração Mínima',
MAX(length) AS 'Duração Máxima',
SUM(length) AS 'Tempo de Exibição Total',
COUNT(*) AS 'Filmes Registrados' FROM sakila.film;

SELECT first_name, COUNT(*) AS 'PESSOAS' FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT store_id AS 'Loja', active, COUNT(*) AS 'QTY'
FROM sakila.customer
GROUP BY store_id, active;

SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT rating, AVG(length) AS average_duration
FROM sakila.film
GROUP BY rating
HAVING average_duration BETWEEN 115 AND 121.50
ORDER BY average_duration DESC;

SELECT rating, SUM(replacement_cost) AS replacement_cost
FROM sakila.film
GROUP by rating
HAVING replacement_cost > 3950.50
ORDER BY replacement_cost ASC;


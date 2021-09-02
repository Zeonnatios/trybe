select A.actor_id, CONCAT(A.first_name,' ', A.last_name), F.film_id
FROM actor AS A
INNER JOIN film_actor AS F
ON A.actor_id = F.actor_id;

SELECT first_name, last_name, address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A 
ON S.address_id = A.address_id;

SELECT C.customer_id, CONCAT(C.first_name, C.last_name) AS name_customer, C.email, 
A.address_id, A.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
ORDER BY name_customer DESC
LIMIT 100;

SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A 
ON C.address_id = A.address_id
WHERE A.district = 'California' AND C.first_name LIKE '%rene%';

SELECT C.first_name, COUNT(A.address) AS `quantidade de endereços`
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON A.address_id = C.address_id
WHERE C.active = 1
GROUP BY C.first_name
ORDER BY C.first_name DESC;

SELECT S.first_name, S.last_name, AVG(P.amount) AS 'Average Payment' 
FROM sakila.staff AS S
INNER JOIN sakila.payment AS P
ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.first_name, S.last_name;

SELECT A.actor_id, A.first_name, F.film_id, F.title
FROM sakila.actor AS A 
INNER JOIN sakila.film_actor AS FA 
ON A.actor_id = FA.actor_id
INNER JOIN sakila.film AS F 
ON F.film_id = FA.film_id;

SELECT A.film_id, A.replacement_cost, B.film_id, B.replacement_cost
FROM sakila.film AS A, sakila.film AS B
WHERE A.replacement_cost = B.replacement_cost;

SELECT A.title, A.rental_duration, B.title, B.rental_duration
FROM sakila.film AS A, sakila.film AS B
WHERE A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;

SELECT first_name, last_name
FROM sakila.actor 
UNION ALL SELECT first_name, last_name
FROM sakila.staff;

SELECT first_name
FROM sakila.customer
WHERE first_name LIKE '%tracy%' 
UNION SELECT first_name
FROM sakila.actor
WHERE first_name LIKE '%je%';

( SELECT first_name
  FROM sakila.actor
  ORDER BY actor_id DESC
  LIMIT 5
) UNION 
( SELECT first_name
  FROM sakila.staff
  LIMIT 1
) UNION 
( SELECT first_name
  FROM sakila.customer
  LIMIT 5 OFFSET 15
) ORDER BY first_name;


(
  SELECT first_name, last_name
  FROM sakila.customer
  ORDER BY first_name , last_name
  LIMIT 60
) UNION 
( SELECT first_name, last_name
  FROM sakila.actor
  ORDER BY first_name , last_name
  LIMIT 60) 
  ORDER BY first_name , last_name LIMIT 15 OFFSET 45;

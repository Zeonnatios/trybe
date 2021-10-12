--1
SELECT MAX(SALARY) FROM hr.employees;
--2
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;
--3
SELECT JOB_ID, AVG(SALARY) AS 'average_salary' FROM hr.employees GROUP BY JOB_ID ORDER BY 'average_salary' DESC;
--4
SELECT SUM(SALARY) FROM hr.employees;
--5
SELECT ROUND(MAX(SALARY),2),
ROUND(MIN(SALARY),2),
ROUND(SUM(SALARY),2),
ROUND(AVG(SALARY), 2)
FROM hr.employees;
--6
SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
WHERE JOB_ID = "IT_PROG";
--7
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID;
--8
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";
-- OR
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
WHERE JOB_ID = "IT_PROG";
--9
SELECT JOB_ID, AVG(SALARY) AS average_salary
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY average_salary DESC;
--OR
SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary` DESC;
--10
SELECT department_id,
    AVG(salary) 'average_salary' ,
    COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;
--11
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
--12
SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;
--13
select EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE)
FROM hr.employees;
--14
select EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE)
FROM hr.employees;
--15
select EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE)
FROM hr.employees;
--16
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME))
FROM hr.employees;
--OR
SELECT UPPER(CONCAT(FIRST_NAME, ' ', LAST_NAME))
FROM hr.employees;
--17
SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';
--OR
SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;
--18
SELECT first_name,
    last_name,
    DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM hr.employees;


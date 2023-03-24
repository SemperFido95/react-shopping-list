-- Don't forget to add your create table SQL 
CREATE TABLE shoppinglist (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	quantity DECIMAL(10,2) NOT NULL,
	unit VARCHAR(20)
);


-- It is also helpful to include some test data
INSERT INTO shoppinglist (name, quantity, unit)
VALUES ('milk', 1, 'gallon');

INSERT INTO shoppinglist (name, quantity)
VALUES ('apples', 3.5);

ALTER TABLE shoppinglist
ADD purchased BOOLEAN DEFAULT FALSE;
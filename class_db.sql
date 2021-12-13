CREATE DATABASE class_db;

USE class_db;

CREATE TABLE breakroom (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	firstName VARCHAR(25) NOT NULL,
    lastName VARCHAR(25) NOT NULL,
    hasGlasses BOOL NOT NULL,
    age INT NOT NULL
);

-- ALTER TABLE breakroom
-- 	ADD age INT NOT NULL;
    
INSERT INTO breakroom (firstName, lastName, hasGlasses, age)
VALUES ('Garrett', 'Broadhead', true, 32),
('Austin', 'Hall', true, 25),
('Kevin', 'Kelley', true, 33),
('Henry', 'Broadhead', false, 24),
('Jazmine', 'Jose', true, 25);

-- USE class_db;
-- SELECT * FROM breakroom
-- WHERE firstName = 'Jazmine' OR firstName = 'Kevin';

    
CREATE TABLE form_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    birthday DATE,
    zipcode VARCHAR(10),
    phone VARCHAR(15),
    email VARCHAR(255),
    message TEXT,
    submission_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
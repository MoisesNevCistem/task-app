-- Create databases
CREATE DATABASE IF NOT EXISTS task_app;

-- Use database
USE task_app;

-- Create tables
CREATE TABLE task_states (
	task_state_id INT(11) AUTO_INCREMENT PRIMARY KEY,
    uuid_task_state VARCHAR(255) NOT NULL,
    task_status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
	task_id INT(11) AUTO_INCREMENT PRIMARY KEY,
	uuid_task VARCHAR(255) NOT NULL,
    title VARCHAR(20) NOT NULL,
    task_description VARCHAR(255) NOT NULL,
    task_state_id INT(11) NOT NULL DEFAULT 1,
    FOREIGN KEY (task_state_id) REFERENCES task_states(task_state_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inserts
INSERT INTO task_states (uuid_task_state, task_status) VALUES ('9c34725b-986c-4730-9767-13855203a851', 'No Started');
INSERT INTO task_states (uuid_task_state, task_status) VALUES ('11ff05c5-b81b-457b-af64-ffb30dac8857', 'In Process');
INSERT INTO task_states (uuid_task_state, task_status) VALUES ('9a18aaf8-5d07-41d7-b919-6ace10f12cce', 'Completed');
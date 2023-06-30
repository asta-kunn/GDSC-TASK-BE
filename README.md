# GDSC-TASK-BE
this project is using Express js with local database. You should create database and the schema first

## Step to Start
1. Entering your database local and create schema todos
2. create table with nmae "todos"
```CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    status BOOLEAN,
    due_date DATE,
    priority TEXT,
);```
3. Run npm run start

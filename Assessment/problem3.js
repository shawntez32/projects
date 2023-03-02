const express = require('express');
const mysql = require('mysql');



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'customers'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql connected!')
});

const app = express();

app.get('/createDb', function(req,res) {
    let sql = 'CREATE DATABASE customers';
    db.query(sql, (err,result) => {
        if(err) throw err;
        res.send('database created successfully!');
    });
});

app.get('/createCustomer', function(req,res) {
    let sql = 'CREATE TABLE customer(id INT AUTO_INCREMENT, name VARCHAR(255), age INT, address VARCHAR(255), email VARCHAR(255),PRIMARY KEY(id))';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Table created!');
    });
});

app.get('/addRows', function(req,res) {
    let sql = "INSERT INTO customer(name,age,address,email) VALUES('Van Allen',52,'123 Mccart','ro456kth@gmail.com'), ('Jenna Parker',23,'123 Oaklawn','bpark@gmail.com'),('Jon Doe',29,'123 Mchut','hotpizza@gmail.com'),('Lisa Jones',32,'123 Berry','lisajones@gmail.com')";
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Table created!');
    });
});

app.get('/customers', function(req,res) {
    let sql = 'SELECT * FROM customer';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/order', function(req,res) {
    let sql = 'SELECT * FROM customer ORDER BY name DESC ';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/wildchar', function(req,res) {
    let sql = 'SELECT * FROM customer WHERE address LIKE "%ber%"';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/address', function(req,res) {
    let sql = 'SELECT name,address FROM customer';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/delete', function(req,res) {
    let sql = 'DELETE FROM customer WHERE id=3';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Record deleted!');
    });
});

app.get('/update', function(req,res) {
    let sql = 'UPDATE customer SET address="482 Bloom St" WHERE id=1';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Record updated!');
    });
});

app.get("/specRecords", function(req,res) {
    let sql = "SELECT * FROM customer WHERE id BETWEEN 3 AND 7";
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/products", function(req,res) {
    let sql = "SELECT * FROM products";
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/users", function(req,res) {
    let sql = "SELECT * FROM users";
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/productsAdd", function(req,res) {
    let sql = "INSERT INTO products(name) VALUES('TV'),('VCR'),('Laptop'),('Gameboy')";
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/usersAdd", function(req,res) {
    let sql = "INSERT INTO users(name,favorite_product) VALUES('Mike',2),('Vince',2),('Dre',3),('John',1)";
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/favoriteproduct', function(req,res) {
    let sql = "SELECT users.id, users.fname, users.favorite_product, products.name FROM users INNER JOIN products ON users.favorite_product = products.id";
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
});

app.listen(1993, () => {
    console.log('Server Started on port 1993');
});
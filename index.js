'use strict';

require('dotenv').config();

console.log("hello world");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// get the client
const mysql = require('mysql2');

// create the connection to database

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

app.get('/' ,(req,res)=> {
  // simple query
  connection.query(
      'SELECT * FROM animals ORDER  BY name',
      (err, results, fields) => {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
        res.send(results);
});

app.post('/',

  bodyParser.urlencoded({extended:true}),(req,res)=>{
  console.log(req.body);

  res.send('This is HTTP POST');

});
app.get ('/html', (req,res) =>
{res.send ('Hello ' + req.body.name);
console.log(req.query);
});
app.listen(3000);
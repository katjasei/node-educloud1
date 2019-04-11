'use strict';

console.log("hello world");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/' ,(req,res)=> {

  res.send('Hello World');
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
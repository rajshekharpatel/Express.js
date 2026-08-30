//Core Modules
const http = require('http');
//External Modules
const express = require('express');

const app = express();


//Adding Middleware
app.use((req, res, next) =>{
  console.log("First Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) =>{
  console.log("Second Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) =>{
  console.log("Another Middleware", req.url, req.method);
  res.send("<p> Came from Another Middleware</p>")
  res.end();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on this address http://localhost:${PORT}`);
});
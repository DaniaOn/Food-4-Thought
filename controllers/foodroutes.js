//import express
const express = require('express');

const app = express();

//HTML GET route
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  });
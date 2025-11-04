const express = require('express');
const app = express();
const db = require('./models');
const db = require('./modules');
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));
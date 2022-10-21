const express = require('express');
const { getAllPatientsPlans } = require('./controllers/patients.controller');

const app = express();
app.use(express.json());

app.get('/patients', getAllPatientsPlans);

module.exports = app;
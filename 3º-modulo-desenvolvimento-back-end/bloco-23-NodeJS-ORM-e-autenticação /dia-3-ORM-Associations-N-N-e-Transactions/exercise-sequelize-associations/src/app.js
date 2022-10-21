const express = require('express');
const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
} = require('./controllers/patients.controller');

const app = express();
app.use(express.json());

app.get('/patients', getAllPatientsPlans);
app.get('/surgeries', getAllPatientsSurgeries);

module.exports = app;
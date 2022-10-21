const express = require('express');
const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
} = require('./controllers/patients.controller');

const { getAllPlans } = require('./controllers/plans.controller');

const app = express();
app.use(express.json());

app.get('/patients', getAllPatientsPlans);
app.get('/surgeries', getAllPatientsSurgeries);
app.get('/:id', getAllPlans);

module.exports = app;
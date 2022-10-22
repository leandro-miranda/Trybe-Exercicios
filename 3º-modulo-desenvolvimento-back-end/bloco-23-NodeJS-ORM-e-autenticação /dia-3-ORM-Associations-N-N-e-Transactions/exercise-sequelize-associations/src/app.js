const express = require('express');
const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatient,
  getPatientsAndSurgeriesNoDoctor,
} = require('./controllers/patients.controller');

const { getAllPlans } = require('./controllers/plans.controller');

const { getDoctorSurgeries } = require('./controllers/surgeries.controller');

const app = express();
app.use(express.json());

app.post('/', createPatient);

app.get('/patients', getAllPatientsPlans);

app.get('/surgeries', getAllPatientsSurgeries);

app.get('/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);

app.get('/surgeries/:name', getDoctorSurgeries);

app.get('/:id', getAllPlans);

module.exports = app;
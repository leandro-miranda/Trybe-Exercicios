const { Patient, Plan, Surgery } = require('../models');

const getAllPatientsPlans = async (_req, res) => {
  try {
    const listOfPatientsPlans = await Patient.findAll({ include: { model: Plan, as: 'plan' } });
    if (!listOfPatientsPlans.length) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatientsPlans);
  } catch (error) {
    console.log((error));
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const getAllPatientsSurgeries = async (_req, res) => {
  try {
    const listOfPatientsSugeries = await Patient.findAll({
      include: { model: Surgery, as: 'surgeries', through: { attributes: [] } },
    });

    if (!listOfPatientsSugeries.length) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatientsSugeries);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const createPatient = async (req, res) => {
  try {
    const { fullname, planId } = req.body;
    const patient = await Patient.create({ fullname, planId });

    return res.status(201).json(patient);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getPatientsAndSurgeriesNoDoctor = async (_req, res) => {
  try {
    const listOfPatients = await Patient.findAll({
      include: {
        model: Surgery,
        as: 'surgeries',
        attributes: { exclude: ['doctor'] },
        through: { attributes: [] },
      },
    });

    if (listOfPatients === null) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatients);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatient,
  getPatientsAndSurgeriesNoDoctor,
};
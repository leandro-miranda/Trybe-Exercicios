const { Patient, Plan, Surgery } = require('../models');

const getAllPatientsPlans = async (req, res) =>
  Patient.findAll({ include: { model: Plan, as: 'plan' } })
    .then((listOfPatientsPlans) => {
      if (!listOfPatientsPlans.length) {
        return res.status(404).send({ message: 'No patients found' });
      }
      return res.status(200).json(listOfPatientsPlans);
    })
    .catch(() => res.status(500).json({ message: 'Algo deu errado!' }));

const getAllPatientsSurgeries = (_req, res) =>
  Patient.findAll({
    include: { model: Surgery, as: 'surgeries', through: { attributes: [] } },
  })
    .then((listOfPatientsSugeries) => {
      if (!listOfPatientsSugeries.length) {
        return res.status(404).send({ message: 'No patients found' });
      }
      return res.status(200).json(listOfPatientsSugeries);
    })
    .catch(() => () => res.status(500).json({ message: 'Algo deu errado' }));

const createPatient = (req, res) => {
  const { fullname, planId } = req.body;
  Patient.create({ fullname, planId })
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }));
};

const getPatientsAndSurgeriesNoDoctor = (_req, res) => (
  Patient.findAll({
    include: {
      model: Surgery,
      as: 'surgeries',
      attributes: { exclude: ['doctor'] },
      through: { attributes: [] },
    },
  })
    .then((listOfPatients) => {
      if (listOfPatients === null) {
        return res.status(404).send({ message: 'No patients found' });
      }

      return res.status(200).json(listOfPatients);
    })
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }))
);

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatient,
  getPatientsAndSurgeriesNoDoctor,
};
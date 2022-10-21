const { Patient, Plan } = require('../models');

const getAllPatientsPlans = async (req, res) =>
  Patient.findAll({ include: { model: Plan, as: 'plan' } })
    .then((listOfPatients) => {
      if (!listOfPatients.length) {
        return res.status(404).send({ message: 'No patients found' });
      }
      return res.status(200).json(listOfPatients);
    })
    .catch(() => res.status(500).json({ message: 'Algo deu errado!' }));

module.exports = {
  getAllPatientsPlans,
};
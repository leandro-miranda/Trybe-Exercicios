const { Patient, Plan } = require('../models');

const getAllPlans = (req, res) =>
  Plan.findAll({
    where: { planId: req.params.id },
    include: [{ model: Patient, as: 'patients' }],
  })
    .then((listOfPlans) => {
      if (!listOfPlans.length) {
        return res.status(404).send({ message: 'No plan found' });
      }
      return res.status(200).json(listOfPlans);
    })
    .catch(() => res.status(500).json({ message: 'Algo deu errado!' }));

module.exports = { getAllPlans };
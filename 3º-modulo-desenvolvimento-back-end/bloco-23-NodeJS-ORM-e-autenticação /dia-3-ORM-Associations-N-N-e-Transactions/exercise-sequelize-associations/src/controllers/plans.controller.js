const { Patient, Plan } = require('../models');

const getAllPlans = async (req, res) => {
  try {
    const listOfPlans = await Plan.findAll({
      // eslint-disable-next-line camelcase
      where: { plan_id: req.params.id },
      include: [{ model: Patient, as: 'patients' }],
    });

    if (!listOfPlans.length) {
      return res.status(404).send({ message: 'No plan found' });
    }
    return res.status(200).json(listOfPlans);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};
module.exports = { getAllPlans };
const { Patient, Surgery } = require('../models');

const getDoctorSurgeries = async (req, res) => {
  try {
    const listOfPatients = await Surgery.findAll({
      where: { doctor: req.params.name },
      include: [{ model: Patient, as: 'patients', through: { attributes: [] } }],
    });
    if (listOfPatients === null) {
      return res.status(404).send({ message: 'No plan found' });
    }
    return res.status(200).json(listOfPatients);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { getDoctorSurgeries };
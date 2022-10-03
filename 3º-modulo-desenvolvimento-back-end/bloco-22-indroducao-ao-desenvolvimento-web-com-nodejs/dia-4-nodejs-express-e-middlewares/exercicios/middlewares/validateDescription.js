// module.exports = (req, res, nex) => {
//   const { description } = req.body;

//   if (!description) {
//     return res.status(400).json(
//       { message: 'O campo description é obrigatório' },
//     );
//   }

//   if (!description.createAt) {
//     return res.status(400).json(
//       { message: 'O campo createAt é obrigatório' },
//     );
//   }

//   if (!description.rating) {
//     return res.status(400).json(
//       { message: 'O campo rating é obrigatório' },
//     );
//   }

//   if (!description.difficulty) {
//     return res.status(400).json(
//       { message: 'O campo difficulty é obrigatório' },
//     );
//   }

//   next();
// };

const validateDescription = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

module.exports = (req, res, next) => {
  return validateDescription(description, res, 'description')
    || validateDescription(description.createAt, res, 'createAt')
    || validateDescription(description.rating, res, 'rating')
    || validateDescription(description.difficulty, res, 'difficulty')
    || next();
};
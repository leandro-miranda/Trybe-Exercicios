module.exports = (req, res, next) => {
  const { createAt } = req.body.description;

  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!isFormatDate.test(createAt)) { // test faz a validação da data enviada
    return res.status(400).json(
      { message: 'O campo createAt deve ter o formato \'dd/mm/aaaa\'' },
    );
  }

  next();
}
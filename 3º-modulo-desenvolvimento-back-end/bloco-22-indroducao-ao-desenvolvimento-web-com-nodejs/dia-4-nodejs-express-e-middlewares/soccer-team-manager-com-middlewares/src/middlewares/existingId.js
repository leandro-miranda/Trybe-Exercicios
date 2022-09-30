const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (teams.some((t) => t.id === id)) {
    // se existe a requisição segue para o próximo middleware
    next();
  } else {
    // se não existe, então va,os retornar o status HTTP 404
    res.sendStatus(404);
  }
}

module.exports = existingId;
const conn = require('./connection');

const insert = (person) => conn.execute(
  `INSERT INTO people
    (first_name, last_name, email, phone) VALUE (?, ?, ?, ?)`,
  [person.firstName, person.lastName, person.email, person.phone],
);

const findAll = () => conn.execute('SELECT * FROM people'); // A função findAll realiza uma consulta no banco de dados, que retorna todas as pessoas cadastradas;

const findById = (id) => conn.execute('SELECT * FROM people WHERE id = ?', [id]); // A função findById realiza uma consulta no banco de dados, que retorna uma pessoa tendo como critério o valor do seu id.

const update = (person, id) => conn.execute(
  `UPDATE people
    SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
  [person.firstName, person.lastName, person.email, person.phone, id],
);

const remove = (id) => conn.execute('DELETE FROM people WHERE id = ?', [id]);

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};
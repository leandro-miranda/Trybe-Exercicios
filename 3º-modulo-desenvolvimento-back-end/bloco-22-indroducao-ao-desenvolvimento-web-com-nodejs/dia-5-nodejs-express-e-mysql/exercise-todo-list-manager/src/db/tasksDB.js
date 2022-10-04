const conn = require('./connection');

const insert = (task) => conn.execute(
  'INSERT INTO tasks (nome, descricao) VALUES (?, ?)',
  [task.nome, task.descricao],
);

const update = (task, id) => conn.execute(
  'UPDATE tasks SET nome = ?, descricao = ? WHERE id = ?',
  [task.nome, task.descricao, id],
);

const remove = (id) => conn.execute(
  'DELETE FROM tasks WHERE id = ?',
  [id],
);

const findAll = () => conn.execute(
  'SELECT * FROM tasks',
);

const findByid = (id) => conn.execute(
  'SELECT * FROM tasks WHERE id = ?',
  [id],
);

module.exports = {
  insert,
  update,
  remove,
  findAll,
  findByid,
};

// Nesse arquivo foram criadas cinco funções:

// A função insert, que é responsável por inserir uma tarefa no banco de dados através de uma Prepared Statement que contêm uma instrução SQL INSERT. Essa função recebe como parâmetro um objeto task que contém os dados da tarefa;

// A função update, que é responsável por atualizar uma tarefa no banco de dados através de uma Prepared Statement que contém uma instrução SQL UPDATE. Essa função recebe como parâmetro um objeto task que contém os dados da tarefa e o id do registro a ser alterado;

// A função remove, que é responsável por excluir uma tarefa no banco de dados através de uma Prepared Statement que contém uma instrução SQL DELETE. Essa função recebe o id do registro a ser excluído;

// A função findAll, que é responsável por buscar todas as tarefas no banco de dados através de uma Prepared Statement que contém uma instrução SQL SELECT;

// A função findById, que é responsável por buscar uma tarefa específica no banco de dados através de uma Prepared Statement que contém uma instrução SQL SELECT. Essa função recebe o id do registro a ser consultado;
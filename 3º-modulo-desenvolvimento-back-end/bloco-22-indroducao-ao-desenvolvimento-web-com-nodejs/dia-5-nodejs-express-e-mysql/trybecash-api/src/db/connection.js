const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 33061,
  user: 'root',
  password: 'root',
  database: 'trybecashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;


// A função createPool recebe um objeto com os seguintes parâmetros:

// host: O endereço IP do MySQL. Como temos um container docker sendo executado em nossa máquina local, o valor será localhost ou 127.0.0.1 (ambos são equivalentes);
// user: O nome de usuário que nossa aplicação utilizará para acessar o MySQL. Estamos utilizando o usuário root do MySQL;
// port: O número da porta que nossa aplicação utilizará para acessar o MySQL. Estamos utilizando a porta 33060 (a porta do computador local que vinculamos com o container no docker compose);
// password: A senha do usuário que nossa aplicação utilizará para acessar o MySQL. Estamos utilizando a senha root que foi definida na variável de ambiente MYSQL_ROOT_PASSWORD no docker compose criado anteriormente;
// database: O nome do banco de dados MySQL, o qual queremos que nossa aplicação realize uma conexão. Estamos utilizando o nome do banco que foi definido na variável de ambiente MYSQL_DATABASE no docker compose;
// waitForConnections: Determina qual será a ação da pool de conexões quando nenhuma conexão estiver disponível na pool e quando o limite de criação de novas conexões tiver sido alcançado. Se o valor for true, será criada uma fila de espera por conexões, caso contrário a pool retornará uma callback com um erro. Caso este parâmetro for omitido, o valor padrão será true;
// connectionLimit: O número máximo de requisições de conexão que a pool criará de uma vez. Caso este parâmetro for omitido, o valor padrão será 10;
// queueLimit: O número máximo de requisições de conexão que a pool irá enfileirar antes de retornar um erro. Se o valor deste parâmetro for igual a 0 significa que não existe limite. Caso este parâmetro seja omitido, o valor padrão será 0.
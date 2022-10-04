require('dotenv').config();
const app = require('./app');
// const connection = require('./db/connection');

const port = 3002;

app.listen(port, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${port}`);
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);

  // o código abaixo é para testarmos a comunicação com o MYSQL
  // const [ result ] = await connection.execute('SELECT 1');
  // if (result) {
  //   console.log('MySQL connection OK');
  // }
});

// No arquivo src/server.js criamos uma constante app que realiza um require do arquivo src/app.js (lembra do module.exports que declaramos?) e, a partir dessa constante, iniciamos o nosso express executando a função app.listen().

// Dentro da função app.listen() foi adicionado um trecho de código que executa a função connection.execute(), que recebe como parâmetro uma consulta SQL SELECT 1. Essa função realiza uma conexão com o MySQL, executa o SQL passado como parâmetro e recebe uma resposta que é armazenada na constante result (note que o processo de desestruturação de variáveis está sendo utilizado! 😎).

// Depois é avaliado através de um if se o objeto result contém alguma coisa e, em caso de positivo, é impresso no console a mensagem MySQL connection OK. Se você for no console e executar o comando npm start, o express será iniciado.
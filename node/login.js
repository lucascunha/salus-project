const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const host = 'localhost';
const port = 3000;

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database:'lucasdb'
};

const connection = mysql.createConnection(config);



/* const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'nodelogin'
}); */

// Caso a tabela não exista, cria uma tabela users com os campos especificados
let createUsers = `create table if not exists users(
	id int not null auto_increment,
	username varchar(128),
	password varchar(128),
	primary key(id)
  )`;

  connection.query(createUsers, function(err, results, fields) {
	if (err) {
	  console.log(err.message);
	}
  });


// Criando um usuário de teste
let InsertTest = `INSERT INTO users (username, password)
VALUES ('test', 'test')`;

  connection.query(InsertTest, function(err, results, fields) {
	if (err) {
	  console.log(err.message);
	}
  });

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/
app.get('/', function(request, response) {
	// Renderiza o template do login
	response.sendFile(path.join(__dirname + '/login.html'));
});

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Captura os campos username e password
	let username = request.body.username;
	let password = request.body.password;
	// Verifica se os campos existem e não estão vazios
	if (username && password) {
		// Executa a consulta SQL que selecionará a conta do banco de dados com base no nome de usuário e na senha especificados
		connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// Se ocorrer algum erro na execução da query, apresenta o erro
			if (error) throw error;
			// Se a conta existe
			if (results.length > 0) {
				// Autentica o usuário
				request.session.loggedin = true;
				request.session.username = username;
				// Redireciona para a home page
				response.redirect('/home');
			} else {
				response.send('Usuário e/ou Senha incorretos!');
			}			
			response.end();
		});
	} else {
		response.send('Por favor, digite o Usuário e a Senha!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// Se o usuário estiver logado
	if (request.session.loggedin) {
		// Saída de username
		response.send('Bem vindo de volta, ' + request.session.username + '!');
	} else {
		// Não está logado
		response.send('Por favor, faça o login para visualizar esta página!');
	}
	response.end();
});

app.listen(port,()=>{
    console.log(`O servidor está rodando em http://${host}:${port}/`);
});
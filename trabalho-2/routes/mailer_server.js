//vai buscar o modulo express ao ficheiro app.js
var express = require('express'); 
var router = express.Router();
//vai buscar o modulo nodemailer ao ficheiro app.js
var nodemailer = require('nodemailer'); 

// vai enviar os dados - post - '/' significa a 
//directoria 
router.post('/', function(req,res,next) {
	var data = {
		//vai tratar tudo o que esteja dentro do body
		nome: req.body.nome,
		apelido: req.body.apelido,
		localidade: req.body.localidade, 
		email:req.body.email, 
		telefone:req.body.telefone,
		assunto:req.body.assunto,
		mensagem:req.body.mensagem, 
	};
	
	//Validar campos de registo
	//atraves do modluo de validacao
	//campos nao podem estar vazios
	req.checkBody('nome', ' Campo obrigatório').notEmpty();
	req.checkBody('apelido', ' Campo obrigatório').notEmpty();
	req.checkBody('localidade', ' Campo obrigatório').notEmpty();
	req.checkBody('email', ' Campo obrigatório').notEmpty();
	req.checkBody('telefone', ' Campo obrigatório').notEmpty();
	req.checkBody('assunto', ' Campo obrigatório').notEmpty();
	req.checkBody('mensagem', ' Campo obrigatório').notEmpty();
	
	var errors = req.validationErrors();
	
	
	if(errors){
		//dá erro
	
		res.writeHead(300,{'Content-Type': 'application/json'});
		res.write(JSON.stringify(errors));
		res.send();
	} else {
		//não dá erro 
		
		// nodemailer precisa de um serviço de transporte para enviar o mail 
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'unidcomengenhariainformatica@gmail.com',
				pass: 'UNIDCOME_2020'
			}
		});
   
		// formulario de email
		const mailOptions = {
			from: req.body.email, // sender address
			to: 'unidcomengenhariainformatica@gmail.com', // list of receivers
			// é o assunto que esttá no formulario 
			subject: req.body.assunto, // Subject line
			//o email recebe o nome, apelido, localidade, email, telefone, e a mensagem
			html: '<p>' + req.body.nome + req.body.apelido + '</p>' + '<p>' + req.body.localidade + '</p>' + '<p>' + 
			req.body.email + '</p>' + '<p>'+ req.body.telefone + '</p>' + req.body.mensagem,// plain text body
		};

		// aqui é quando nos permite escrever o email e enviar
		transporter.sendMail(mailOptions, function (err, info) {
			if(err)
				console.log(err)
			else
				console.log(info);
		});		
			       
		res.writeHead(200,{'Content-Type': 'application/json'});	
		res.write(JSON.stringify(ok));
		res.send();
	}
});

module.exports = router; 



const http = require('http')
/* criando um servidor que vai receber uma requisição e dar uma resposta, então iniciamos uma arrow function*/
http.createServer((request,response) => {
    /* aqui vamos colocar a porta onde vai escutar e também é onde ele vai responder, |resposta.end() finaliza: (não tem mais nada a fazer)| */
    response.write('Hello Word')
    response.end()

}).listen(8080)
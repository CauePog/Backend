// importando o modulo 'http' do node.js, que permite criar um servidor https

const http = require('http')
// criando um servidor que escuta as requisições na porta 9090
const server = http.createServer((req,req)=>{
    // extraindo a url e o metodo de requisição
    const url = req.url //url requisitada
    const method = req.method // o metodo http (GET | POST)

    //Verificando se a URL começa '/dados' , endpoint que vamos usar
    if (url.startsWith('/dados')){
        // se o metodo for GET, trate a requisição para buscar dados
        if(method === GET){ 
            const queryParams = new URLSearchParams(url.split('?')[1])
            const nome = queryParams.get('nome') // obtém o valor do parametro 'nome'
            const idade = queryParams.get('idade') // obtém o valor do parametro 'idade'
   
            //preparando a resposta com os dados recebidos
            const responseData = {
                mensagem: `olá, ${nome}! Você tem ${idade} anos.`
            }

            res.setHeader('Content-Type', 'application/json') //definido o cabeçalho da resposta como JSON
            
            // envia resposta com status de OK e os dados em JSON
            res.statusCode = 200
            res.end(JSON.stringify(responseData))
            
        }
       //Se o método for POST, trata a requisição para enviar dados

       else if (method === 'POST'){
        let body = '' //Variavel para armazenar o corpo da requisição

        //escuta os dados que são enviados no corpo da requisição
        req.on('data', chunk => {
            body += chunk.toString() //convertendo o chunk para string e adicionando ao corpo

        })
        //quando todos os dados forem recebidos, processe a requisição
        
       }
    }
})
// importando express
const express =require('express')
//criando uma instancia do aplicativo express

const app = express()

//definindo uma rota para o endpont raiz ('/')
//quando uma solicitação GET é feita para '/', essa funçao é executada
app.get('/', function(req, res){
    //retorna uma resposta no formato JSON com uma mensagem de boas vindas
    return res.json({
        message: 'Olá turma 5938!'
    })

})

// definindo uma rota para o endpont 'projects'
// quando uma solicitação GET é feita para 'projects', a função a seguir é executada
app.get('/project', function(req, res){
    return express.res.json([
        'projeto 1',
        'projeto 2'
    ])
})

//definindo uma rota para criar um novo projeto
//quando uma solicitação do tipo POST é feita para '/projects'.
app.post('/projects', function(req, res){
    //retornar uma resposta com uma lista de projetos, incluindo o novo projeto
    return res.json([
        'projeto 1',
        'projeto 2',
        'projeto 3'
    ])
})
// definindo uma rota para atualizar um projeto especifico 
// o ':id' é um parametro de rota , 
app.put('/projects :id', function(req, res){
    // retorna uma resposta JSON com a lista de projetos atualizadas
    return res.json([
        'projeto 4',
        'projeto 2',
        'projeto 3'
    ])

})
// definindo uma rota para deletar um projeto especifico

app.delete('/projects/:id', function(req, res){
    // retorna uma resposta com a lista de projetos após a exclusão de um deles
    return res.json([
        'projeto 2',
        'projeto 3'
    ])
})
//iniciando o servidor na porta 9093 (para orientar no terminar que o servidor foi iniciado, vamos colocar uma mensagem)
app.listin(9093, ()=> {
    console.log('Servidor iniciando uma porta 9093')
})
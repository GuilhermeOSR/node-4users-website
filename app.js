const express = require("express");
const app = express();
const { engine } = require("express-handlebars")
const path = require('path');


const PORT = process.env.PORT || 4040;


//Configuração Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

//Configuração Banco de Dados

//Configurar Body-parser

//Outros
    app.use(express.static('public'));

//Rotas

app.get("/contato", (req, res) => {
    res.send("contato")
})

app.get("/portfolio", (req, res) => {
    res.render('portfolio')
})

app.get("/", (req, res) => {
    res.render('home')
})


// Servidor 

app.listen(PORT, () => {
    console.log(`Servidor rodando na Porta ${PORT}`)
})
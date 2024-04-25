const express = require('express');
const app = express();
app.use(express.json());

const usuarioController = require('./Controller/tarefacontroller');
app.use('/tarefas', usuarioController);

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD  

const url ="mongodb+srv://alehabila:<password>@cluster0.funhnuq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
console.log(url);

mongoose.connect('mongodb://127.0.0.1:27017/empresa')
    .then(() => {
        app.listen(27017, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor MongoDB iniciado');
        })
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(3000, () => console.log('Servidor rodando na porta: 3000'));


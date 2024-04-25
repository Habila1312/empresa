const mongoose = require('mongoose');

const Tarefas = mongoose.model('Tarefa', {
    titulo: String,
    descricao : String,
    concluida : String,
    id : String,
    
});

module.exports = Tarefas;
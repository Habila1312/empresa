const express = require('express');
const router = express.Router();


const Tarefas = require('../fazerTarefa/tarefa');

router.get('/', async (req, res) => {
    try {
        const tarefas = await Tarefas.find();
        res.json(tarefas);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}); 


router.post('/', async (req, res) => {
    console.log(req.body);
    const { titulo, descricao, concluido,id } = req.body;

    const tarefa = {
        titulo, descricao, concluido, id
    }

    try {
        await Tarefas.create(tarefa);
        res.status(201).json(tarefa);
    } catch (error) {
        res.status(500).json({ error: error });
    }

});

router.patch('/:id', async (req, res) => {
    try {
        const ide = req.params.id;

        const { titulo, descricao, concluido, id } = req.body;
        const tar = {
            titulo, descricao, concluido, id
        }

        const updateTar = await Tarefas.updateOne({ _id: ide }, tar);

        if (updateTar.matchedCount === 0) {
            res.status(422).json({ mensagem: "Tarefa não encontrado" });
            return
        }
        res.status(200).json(tar);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const tarefa = await Tarefas.findById({ _id: id });

        if (!tarefa) {
            res.status(422).json({ mensagem: "Tarefa não encontrado" });
            return;
        }

        await Tarefas.deleteOne({ _id: id });

        res.status(200).json({ mensagem: `${id} - Excluído com sucesso!` });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const tarefa = await Tarefas.findById(id);
        res.json(tarefa);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});


module.exports = router;
    
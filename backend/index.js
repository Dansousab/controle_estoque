const dbSetup = require('./db/db_setup');
const MaterialModel = require('./db/model/material_model');
const express = require('express')
const cors = require('cors')

dbSetup();

//npx knex migrate:make --migrations-directory "./db/migrations" init

const app = express()

app.use(express.json());
app.use(cors({
  origin: '*'
}));

const port = 3000

app.get('/material/', async (req, res) => {
  try {
    const material = await MaterialModel.query();
    res.json(material);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

app.get('/material/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const material = await MaterialModel.query().findById(id);
    res.json(material);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

app.post('/material/cadastrar/', async (req, res) => {

  try {
    const material = req.body;

    console.log(material);

    await MaterialModel.query().insert(material);

    res.send("Material cadastrado com sucesso !");
    
  } catch (err) {
    res.status(500).json(err);
  }

});

app.put('/material/alterar/:id', async (req, res) => {

  try {
    const id = req.params.id;
    const material = req.body;

    console.log(material);

    await MaterialModel.query().patch(material)
    .where('nome', '=', `${material.nome}`);
    // .where('nome', 'like', `%${material.nome}%`);
    // .where('nome', 'like', `{material.nome}`);;

    res.send("Material alterado com sucesso !");
    
  } catch (err) {
    res.status(500).json(err);
  }

});

app.delete('/material/deletar/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const material = await MaterialModel.query().deleteById(id);
    res.send("Material deletado com sucesso!");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

/** 
 * C - Create -> POST
 * R - Read -> GET
 * U - Update -> PUT
 * D - Delete -> Delete
*/

app.listen(port, () => {
  console.log(`Projeto rodando na porta  ${port}`)
})
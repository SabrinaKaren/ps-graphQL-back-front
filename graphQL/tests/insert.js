const db = require('../config/db.js');

// status - insert
const novoStatus = {
    nome: 'Teste'
}

db('status').insert(novoStatus)
    .then(res => console.log('status inserido:', res))
    .catch(err => console.error(err))
    .finally(() => db.destroy());

// candidato - insert
const novoCandidato = {
    nome: 'Carlos Garcia'
}

db('candidato').insert(novoCandidato)
    .then(res => console.log('candidato inserido:', res))
    .catch(err => console.error(err))
    .finally(() => db.destroy());
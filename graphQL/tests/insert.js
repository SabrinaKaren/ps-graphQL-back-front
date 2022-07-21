const db = require('../config/db.js');
const consts = require('../shared/consts');

// status - insert
const novoStatus = {
    nome: 'Teste'
}

db(consts.statusTable).insert(novoStatus)
    .then(res => console.log('status inserido:', res))
    .catch(err => console.error(err))
    .finally(() => db.destroy());

// candidato - insert
const novoCandidato = {
    nome: 'Carlos Garcia'
}

db(consts.candidatoTable).insert(novoCandidato)
    .then(res => console.log('candidato inserido:', res))
    .catch(err => console.error(err))
    .finally(() => db.destroy());
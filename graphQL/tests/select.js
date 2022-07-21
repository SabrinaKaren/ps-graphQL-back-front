const db = require('../config/db.js');

db('status')
    .then(res => res.map(item => `${item.nome} ** ${item.id}`))
    .then(res => console.log('lista de status do banco:', res))
    .catch(err => console.error(err))
    .finally(() => db.destroy());

db('candidato')
    .then(res => console.log(res.map(item => item.nome)))
    .catch(err => console.error(err))
    .finally(() => db.destroy());
const db = require('../config/db.js');

db('projeto')
    .where({ id: 1 })
    .update({ nome: 'Pai D\'égua', cc: '00000000' })
    .then(res => console.log('projeto atualizado:', res))
    .catch(err => console.error(err))
    .finally(() => db.destroy());
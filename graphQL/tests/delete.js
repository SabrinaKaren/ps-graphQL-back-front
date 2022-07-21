const db = require('../config/db.js');

db('projeto')
    .where({ id: 1 })
    .delete()
    .then(res => console.log('projeto deletado: ', res))
    .catch(err => console.error(err))
    .finally(() => db.destroy());
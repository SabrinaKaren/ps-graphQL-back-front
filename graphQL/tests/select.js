const db = require('../config/db.js');
const consts = require('../shared/consts');

/* db(consts.statusTable)
    .then(res => res.map(item => `${item.nome} ** ${item.id}`))
    .then(res => console.log('lista de status do banco:', res))
    .catch(err => console.error(err))
    .finally(() => db.destroy()); */

/* db(consts.candidatoTable)
    .then(res => console.log(res.map(item => item.nome)))
    .catch(err => console.error(err))
    .finally(() => db.destroy()); */

/* db(`${consts.candidatoTable} as c`)
    .join(`${consts.statusTable} as s`, 's.id', 'c.status')
    .select('c.status')
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => db.destroy()); */

db.select('*')
    .select('s.nome as status_nome')
    .from(`${consts.candidatoTable} as c`)
    .join(`${consts.statusTable} as s`, 's.id', 'c.status')
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => db.destroy());
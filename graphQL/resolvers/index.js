const db = require('../config/db');
const consts = require('../shared/consts');

module.exports = {
    Query: {
        candidatos() {
            return db.select('*')
                .select('s.nome as status_nome')
                .from(`${consts.candidatoTable} as c`)
                .join(`${consts.statusTable} as s`, 's.id', 'c.status')
                .then(res => {
                    res.map(item => {
                        item.dataNascimento = item.data_nascimento;
                        item.linkRepositorio = item.link_repositorio;
                        item.status = item.status_nome;
                        delete item.data_nascimento;
                        delete item.link_repositorio;
                    });
                    return res;
                });
        }
    }
}
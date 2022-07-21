const db = require('../config/db');
const consts = require('../shared/consts');

module.exports = {
    Query: {
        candidatos() {
            return db(consts.candidatoTable)
                .then(res => {
                    res.map(item => {
                        item.dataNascimento = item.data_nascimento;
                        item.linkRepositorio = item.link_repositorio;
                        delete item.data_nascimento;
                        delete item.link_repositorio;
                    });
                    return res;
                });
        }
    }
}
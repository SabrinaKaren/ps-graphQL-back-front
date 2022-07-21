const db = require('../config/db');
const consts = require('../shared/consts');

module.exports = {
    Query: {
        async candidatos() {
            return await db(consts.candidatoTable);
        }
    }
}
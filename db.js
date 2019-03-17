const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost/petpedia");

module.exports = { db, }

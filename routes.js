const {db,} = require('./db');

const get = (req, res) => {
    db.any('SELECT * FROM pets')
        .then(data => {
            res.status(200)
            res.json(data)
        })
}

const post = (req, res) => {
    db.any('SELECT * FROM pets')
        .then(data => {
            res.status(200)
            res.json(data)
        })
}

module.exports = { get, post, }

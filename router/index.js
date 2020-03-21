const good = require('./good') 

const router = (app) => {
    app.use('/api/good', good)
}

module.exports = router
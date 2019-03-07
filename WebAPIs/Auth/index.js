var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api', (req, res)=> {
    res.status(200).send('Api works');
})

var authController = require('./authController')
app.use('/auth', authController);

var gamesController = require('./games/gameController')
app.use('/games', gamesController);

var port = 3000;
app.listen(port, () => {
    console.log('Express server is listening on port ' + port)
})
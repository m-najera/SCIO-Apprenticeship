var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: true
}))

var Game = require('./game')
//Simular Base de Datos
var GAMES = [];
GAMES.push(new Game('Transistor', 'Strategy'));
GAMES.push(new Game('Age Of Empires II', 'RTS'));
GAMES.push(new Game('The Legend of Zelda: Breath of the Wild', 'Adventure'));
GAMES.push(new Game('The Binding of Isaac', 'RogueLike'));
GAMES.push(new Game('Final Fantasy IV', 'RPG'));
GAMES.push(new Game('Persona 4', 'RPG'));
GAMES.push(new Game('Xenoblade Chronicles', 'RPG'));

router.post('/', (req, res) => {
    var body = req.body;
    if (!body.name || !body.genre) {
        return res.status(400).send('Bad format')
    }
    var game = new Game(body.name, body.genre);
    console.log(game);
    GAMES.push(game);
    res.status(201).send('Game added');
})

router.get('/:id', (req, res) => {
    if (req.params.id > GAMES.length || req.params.id<=0) {
        return res.status(404).send('Game not found');
    }
    res.status(200).send(GAMES[req.params.id-1])
})

router.patch('/:id', (req, res) => {
    var body = req.body;
    if (req.params.id > GAMES.length || req.params.id <= 0) {
        return res.status(404).send('Game not found');
    }
    var game = GAMES[req.params.id];
    if (body.name) {
        game.name = body.name;
    }
    if (body.genre) {
        game.genre = body.genre;
    }
    console.log(game)
    res.status(200).send(game)
})

router.delete('/:id', (req, res)=> {
    if(req.params.id > GAMES.length || req.params.id <= 0){
        return res.status(404).send('Game not found');
    }
    GAMES[req.params.id] = new Game('deleted','deleted');
    res.status(200).send('Game deleted')
})

router.get('/', (req, res) => {
    res.status(200).send(GAMES);
})

module.exports = router
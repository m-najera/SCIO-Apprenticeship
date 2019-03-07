var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: true
}))

var Game = require('./game')
var verifyToken = require('../verifyToken')
//Simular Base de Datos
var GAMES = [];
GAMES.push(new Game(1,'Transistor',2014, 'Strategy'));
GAMES.push(new Game(2,'Age Of Empires II',1999 ,'RTS'));
GAMES.push(new Game(3,'The Legend of Zelda: Breath of the Wild',2017, 'Adventure'));
GAMES.push(new Game(4,'The Binding of Isaac', 2011, 'RogueLike'));
GAMES.push(new Game(5,'Final Fantasy IV',1991, 'RPG'));
GAMES.push(new Game(6,'Persona 4', 2008, 'RPG'));
GAMES.push(new Game(7,'Xenoblade Chronicles',2010, 'RPG'));

router.post('/', verifyToken ,(req, res) => {
    var body = req.body;
    if (!body.name || !body.year ||!body.genre) {
        return res.status(400).send('Bad format')
    }
    var game = new Game(body.name, body.genre);
    GAMES.push(game);
    res.status(201).send('Game added');
})

router.get('/:id', verifyToken, (req, res) => {
    var g  = GAMES.find( game => game.id == req.params.id);
    if (!g) {
        return res.status(404).send('Game not found');
    }
    var g  = GAMES.find( game => game.id == req.params.id);
    res.status(200).send(g)
})

router.patch('/:id', verifyToken, (req, res) => {
    var body = req.body;
    var g  = GAMES.find( game => game.id == req.params.id);
    if (!g) {
        return res.status(404).send('Game not found');
    }
    if (body.name) {
        g.name = body.name;
    }
    if (body.year){
        g.year = body.year;
    }
    if (body.genre) {
        g.genre = body.genre;
    }
    console.log(game)
    res.status(200).send(game)
})

router.delete('/:id', verifyToken, (req, res)=> {
    var g  = GAMES.findIndex( game => game.id == req.params.id );
    
    if (g<0){
        return res.status(404).send('Game not found');
    }
    GAMES.splice(g,1);
    res.status(200).send('Game deleted')
})

router.get('/',verifyToken ,(req, res) => {
    res.status(200).send(GAMES);
})

module.exports = router
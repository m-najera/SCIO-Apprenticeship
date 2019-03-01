var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: true
}))

var Game = require('./game')
var GAMES = [];
//CREATE a new user
router.post('/', (req, res) => {
    var body = req.body;
    if (!body.name || !body.email || !body.password) {
        return res.status(400).send('Todo bad')
    }
    var game = new Game(body.id, body.name, body.genre);
    console.log(game)
    GAMES.push();
    //TODO save to db
    res.status(201).send('Game added');
})

router.get('/:id', (req, res) => {
    if (req.params.id > 50) {
        return res.status(404).send('Game not found');
    }
    //TODO get user db
    var game = new Game('1', 'Transistor', 'Strategy');
    res.status(200).send(game)
})

router.patch('/:id', (req, res) => {
    var body = req.body;
    if (req.params.id > 50) {
        return res.status(404).send('User not found');
    }
    var user = new User('David', 'ldcruz@sciodev.com', 'A22222');
    if (body.name) {
        user.name = body.name;
    }
    if (body.email) {
        user.email = body.email;
    }
    if (body.password) {
        user.password = body.password;
    }
    console.log(user)
    res.status(200).send(user)
})

// router.delete('/:id', (req, res)=> {
//     if(req.params.id > 999){
//         return res.status(404).send('User not found');
//     }
//     var user = new User('David', 'ldcruz@sciodev.com', 'A22222');
//     user = undefined
//     res.status(200).send('User deleted')
// })

// router.get('/', (req, res) => {
//     var user1 = new User('Jonathan', 'jsanchez@sciodev.com', 'A33333');
//     var user2 = new User('Tatiana', 'thernandez@sciodev.com', 'body.password');
//     var users = [];
//     users.push(user1);
//     users.push(user2);
//     //TODO save to db
//     res.status(200).send(users);
// })

module.exports = router
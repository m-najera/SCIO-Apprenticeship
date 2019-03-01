var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: true}))

var User = require('./user')

//CREATE a new user
router.post('/', (req, res) => {
    var body = req.body;
    if(!body.name || !body.email || !body.password){
        return res.status(400).send('Todo bad')
    }
    var user = new User(body.name, body.email, body.password);
    console.log(user)
    //TODO save to db
    res.status(201).send('Todo Good');
})

router.get('/:id', (req, res)=> {
    if(req.params.id > 999){
        return res.status(404).send('User not found');
    }
    //TODO get user db
    var user = new User('David', 'ldcruz@sciodev.com', 'A22222');
    res.status(200).send(user)
})

router.patch('/:id', (req, res)=> {
    var body = req.body;
    if(req.params.id > 999){
        return res.status(404).send('User not found');
    }
    var user = new User('David', 'ldcruz@sciodev.com', 'A22222');
    if(body.name){
        user.name=body.name;
    }
    if(body.email){
        user.email=body.email;
    }
    if(body.password){
        user.password=body.password;
    }
    console.log(user)
    res.status(200).send(user)
})

router.delete('/:id', (req, res)=> {
    if(req.params.id > 999){
        return res.status(404).send('User not found');
    }
    var user = new User('David', 'ldcruz@sciodev.com', 'A22222');
    user = undefined
    res.status(200).send('User deleted')
})

router.get('/', (req, res) => {
    var user1 = new User('Jonathan', 'jsanchez@sciodev.com', 'A33333');
    var user2 = new User('Tatiana', 'thernandez@sciodev.com', 'body.password');
    var users = [];
    users.push(user1);
    users.push(user2);
    //TODO save to db
    res.status(200).send(users);
})

module.exports = router
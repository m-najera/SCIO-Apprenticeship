var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

var verifyToken = require('./verifyToken')
var jwt = require('jsonwebtoken')
var User = require('./user')

var secret = "SuperSecretKey"

router.post('/login', (req, res) => {
    var body = req.body;
    if(body.email == "jlarreygue@sciodev.com" && body.password == "A11111"){
        var user = new User("Jorge", body.email, body.password);
        var token = jwt.sign(user.toJson(), secret, {
            expiresIn: 86400 // 24 horas
        });
        res.status(200).send({auth: true, token: token})
    }else{
        return res.status(401).send({auth: false, token: null})
    }
});

router.post('/register', (req, res) => {
    var body = req.body;
    if(body.email && body.password && body.name){
        var user = new User(body.name, body.email, body.password);
        res.status(200).send({user: user})
    }else{
        return res.status(401).send("Error")
    }
});

router.get('/me', verifyToken,  (req, res) => {
    res.status(200).send(req.user)
})

router.post('/logout', verifyToken,  (req, res) => {
    res.status(200).send({auth: false, token: null})
})

module.exports = router
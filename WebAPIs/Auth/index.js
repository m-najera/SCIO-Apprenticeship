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

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/wapi");
var usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})
var userModel = mongoose.model('Usuario', usersSchema);
var newuser = new userModel({
    name: "name",
    email: "email",
    password: "password"
});
// newuser.save((err, newuser) => {
//     if (err) return console.err("ERROR");
//     console.log("AAAA IOK")
// });
userModel.find();
// algo.add('Miguel','manajera@sciode.com','holamundo');
// algo.add('Lilia','aaa@gmail.com','aaaa');
// algo.getAll();
var port = 3000;
app.listen(port, () => {
    console.log('Express server is listening on port ' + port)
})

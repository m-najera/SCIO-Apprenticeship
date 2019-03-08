var mongoose = require('mongoose');
var userDB = require('./userDB');
this.add = (name, email, password) => {
    this.user = new userDB({
        name: name,
        email: email,
        password: password
    });
    this.user.save()
        .then(doc => {console.log(doc); next();})
        .catch(err => console.log("AAA"))
}
this.get = function (mail) {
    userDB.find({ email: mail })
        .then(doc => console.log(doc))
        .catch(err => {
            console.error(err)
        })
}

this.getAll = function () {
    userDB.find();
}
module.exports = this;
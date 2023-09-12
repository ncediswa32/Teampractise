const Book = require('');
const User = db.user;
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

    const user = new User ({
        username: req.bodyusername,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    user.save().then(() => {
        res.status(200).send({message: "Register was a success!"})
    })
}
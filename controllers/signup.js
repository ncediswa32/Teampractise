const user = require('../models/Signup');
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    try {
      const User = new user({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    console.log(User)

      const saveUser = await User.save();
      res.status(201).json(saveUser).then(() => {
        res.status(200).send({message: "Register was a success!"})
      })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
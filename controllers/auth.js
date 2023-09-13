const user = require('../models/Signup');
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
      const User = new user({
        username: req.body.useername,
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

  // exports.signup = async (req, res) => {
  //   try {user.findOne({username: req.body.username})
  //   .then(User =>{
  //     if(!User){
  //      return res.status(404).send({message: "User Not Found."});
  //     }


  //     var valid password = 
  //   })
  // }
  // }
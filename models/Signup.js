const mongoose = require('mongoose');

const User = new mongoose.Schema({
  ussername: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  verify: { type: String, required: true },
});

module.exports = mongoose.model('user', User);


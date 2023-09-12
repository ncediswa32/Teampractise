const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const users = require('./routes/user')
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/users').then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});


app.use(express.json());
app.use('/books', bookRoutes);
app.use('/users', users);
// Import the router and use it in your app
const userRoutes = require('./routes/user');
app.use('/api', userRoutes); // Use '/api' as a prefix for your user routes


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
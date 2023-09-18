const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const cors =  require('cors')
const app = express();
const port = 3000;

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("Connected to database successfully"));

app.use(express.json());
app.use('/api/books/', bookRoutes);





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
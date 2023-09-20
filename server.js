const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const cors =  require('cors')
const app = express();
const port = 3000;

app.use(cors())

mongoose.connect('mongodb+srv://mfekethothulane:mongo@mfekethothulane021.plal87j.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("Connected to database successfully"));

app.use(express.json());
app.use('/api/books/', bookRoutes);





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

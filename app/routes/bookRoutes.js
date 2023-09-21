const express = require('express');
const { upload }= require("../helper/helper")



const router = express.Router();
const bookController = require('../controllers/bookController');


router.post('/create', upload.single("image"), bookController.createBook);
router.get('/get', bookController.getAllBooks);
router.delete('/:id',  bookController.deleteOne);
router.put('/:id',bookController.updateBook);
router.get('/:id',bookController.getone);
router.get("/", bookController.searchBookByName);

// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;
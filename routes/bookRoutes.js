const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/create', bookController.createBook);
router.get('/get', bookController.getAllBooks);
router.delete('/:id', bookController.deleteOne);
router.put('/:id',bookController.updateBook);
router.get('/:id',bookController.getone)


// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;
const Book = require('../models/book');

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
exports.getAllBooks = async (req, res)=>{


    Book.find()
    .then(data=>{
        res.send(data)
        console.log(data)

    })
    .catch(error=>{
        res.status(500).send("Could not find book",error)
        console.log("Could not find book,error")
    })

 }

 
 
//Delete a user
exports.deleteOne = (req, res)=>{
    
    const id = req.params.id
    Book.findByIdAndRemove(id, {useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({
                msg:`Cannot delete Book with id=${id}.Maybe it was not exit`
               
            })
        }else res.status(201).send({msg:"Book was deleted successfully."})
    })
    .catch(err=>{
        res.status(500).send({msg: `Error deleting Book with id=${id},Error: ${err}`})
    })

}
// Update a user
exports.updateBook = (req,res)=>{
    if(!req.body){
       res.status(400).send("Cannot update book")
       return;
    }
    const id = req.params.id

    Book.findByIdAndUpdate(id, req.body, { userFindAndModify:false})
    .then(data=>{
       if(!data){
           res.status(400).send({
               msg:'Cannot update Book with id=${id}.Maybe it was not found'
           })
       } else res.status(201).send({msg:"Book was updated succefully"})
    })
    .catch(err=>{
       res.status(500).send({msg: 'Error updating Book with id=${id} ${err}'})
    })
   
}

exports.getone = (req, res)=>{
    
    const id = req.params.id
    Book.findById(id, {useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({
                msg:`Cannot delete Book with id=${id}.Maybe it was not exit`
               
            })
        }else res.status(201).send({msg:" successfully getone."})
    })
    .catch(err=>{
        res.status(500).send({msg: `Error deleting Book with id=${id},Error: ${err}`})
    })

}
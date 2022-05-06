
const express = require('express');
const mongoose = require('mongoose')

const Books = mongoose.model('Books')

const router = express.Router();

router.get('/', (req, res) => {
    res.render("book/addOrEdit", {
        viewTitle : "Insert a Book"
    })
})


router.post('/', (req, res) => {
    if(req.body._id == '' ){
        insertRecord(req, res);
    }
    else{
        updateRecord(req,res);
    }
})


function insertRecord(req,res){
    var book = new Books();
    book.book_id = req.body.book_id;
    book.name = req.body.name;
    book.author = req.body.author;
    book.price = req.body.price;
    book.save((err, doc) => {
        if(err){
            console.log("Error has occured!" + err)
        }else{
            // console.log("Sucessfully Record Inserted!")
            res.redirect('book/list')
        }
    });

}


// Updating the record
function updateRecord(req,res){
    Books.findOneAndUpdate( {_id : req.body._id}, req.body, { new:true} , (err, doc) => {
        if(err){
            console.log("Error has occured!" + err)
        }else{
        
            res.redirect('book/list')
        }
    } )

     


}

// Deleting the Record 
router.get('/delete/:id', (req, res) => {
    Books.findByIdAndRemove(req.params.id, (err, doc) => {
        if(err){
            console.log("Error while Deleting the record" + err)
        }
        else{
            res.redirect('/book/list')
        }
    })
})


router.get('/list', (req, res) => {
    // res.json("From List")
    Books.find((err, doc) =>{
        if(err) {
            console.log("Error while retriving !")
        
        }else{
            res.render('book/list', {
                list : doc
            })
        
        }
    })
})

router.get('/:id', (req, res) => {
 Books.findById(req.params.id, (err, doc) => {
    if(err) {

    }else{
        res.render('book/addOrEdit', {
            viewTitle : 'Update a Book', 
            book : doc
        })
    }
 })


})

module.exports = router;
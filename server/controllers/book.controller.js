const db = require('../models');
const Book = db.books;

//Create and save a new Book
exports.create = (req, res) => {
    //Validate request
    if( !req.body.title  || !req.body.author ) {
        res.status(400).send({message: 'Content cannot be empty!'})
        return;
    }

    //Create a Book
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        yearReleased: req.body.year,
        genre: req.body.genre,
        bookmark: req.body.bookmark,
        completed: req.body.readComplete
    });

    //Save Book to database
    book.save(book)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                err.message || "Some error occurred while creating the Book."
            })
        })
};

//Retrieve all Books from the database or find by title
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {};

    Book.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        })

};
// Find a single Book with an id
exports.findOne = (req, res) => {
    const id = req.params._id;
    
    Book.findById(id)
        .then(data => {
            if(!data)
                res.status(404).send({ message: 'Book not found with id: ' + id });
            else 
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: 'An error occured while retrieving Book with id: ' + id })
        });
};
// Update a Book by the id in the request
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Can't update empty field!"
        });
    }

    const id = req.params._id;
    Book.findByIdAndDelete(id, req.body, { useFindAndModify: false })
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot update Book with id: ${id}.`
                })
            }
            else
                res.send({ message: 'Book was updated successfully.'})
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error updating Boom with id: ' + id
            });
        })
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params._id;

    Book.findByIdAndRemove(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot delete delete Book with id: ${id}`
                });
            }else {
                res.send({
                    message: 'Book was deleted successfully.'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not delete Book with id: ' + id
            })
        })
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Book.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Books were deleted successfully.`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 
                err.message || "An error occured while trying to delete all books."
            });
        });
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Book.find({ completed: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while trying to retrieve your books."
            })
        })
};
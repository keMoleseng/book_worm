const { mongoose } = require(".");

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    yearReleased: Number,
    genre: String,
    bookmark: Number,
    completed: Boolean
})
const Book = mongoose.model(
    'book',
    bookSchema
)

module.exports = Book;
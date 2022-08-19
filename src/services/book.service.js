//for backend connection
import http from '../http-common';

//Services for local storage
const KEYS = {
    books: 'books',
    bookId: 'bookId'
}

export const getGenres = () => ([
    {id: '1', title: 'Fantasy'},
    {id: '2', title: 'Sci-Fi'},
    {id: '3', title: 'Mystery'},
    {id: '4', title: 'Thriller'},
    {id: '5', title: 'Romance'},
    {id: '6', title: 'Western'},
    {id: '7', title: 'Contemporary'},
    {id: '8', title: 'Non-fiction'},
    {id: '9', title: 'Adventure'},
    {id: '10', title: 'Other'}
])

export function insertBook(data) {
    const books = getAllBooks();
    data['id'] = generateBookId();
    books.push(data);
    localStorage.setItem(KEYS.books, JSON.stringify(books))
}

export function updateBook(data) {
    const books = getAllBooks();
    const recordIndex = books.findIndex(x => x.id === data.id);
    books[recordIndex] = { ...data };
    localStorage.setItem(KEYS.books, JSON.stringify(books));
}

export function generateBookId() {
    if(localStorage.getItem(KEYS.bookId) === null)
        localStorage.setItem(KEYS.bookId, '0');
    
    let id = parseInt(localStorage.getItem(KEYS.bookId));
    localStorage.setItem(KEYS.bookId, (++id).toString());
    return id;
}

export function getAllBooks() {
    if(localStorage.getItem(KEYS.books) === null)
        localStorage.setItem(KEYS.books, JSON.stringify([]));

    let books = JSON.parse(localStorage.getItem(KEYS.books));

    //map genre id to genre title
    let genres = getGenres();
    return books.map(book => ({
        ...book,
        genre: genres[parseInt(book.genreId) -1].title
    }))
}
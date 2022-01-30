import { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  const [books, setBooks] = useState([])
  const [dbBooks, setDbBooks] = useState([])

  useEffect(() => {
    fetch("https://the-dune-api.herokuapp.com/books/22")
    .then(r => r.json())
    .then(data => setBooks(data))

    fetch("http://localhost:3001/books")
    .then(r => r.json())
    .then(data => setDbBooks(data))
  }, [])

  return (
    <div className="books-container">
      <ul className="book-list">
        {books.sort((a, b) => a.id - b.id).map(book => 
          dbBooks.map(dbBook => {
            if(dbBook.id === book.id) {
              return <BookCard key={book.id} book={book} image={dbBook.image} />
            }
          })
        )}
      </ul>
    </div>
  )
}

export default BookList

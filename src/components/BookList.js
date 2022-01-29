import { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("https://the-dune-api.herokuapp.com/books/22")
    .then(r => r.json())
    .then(data => setBooks(data))
  }, [])

  return (
    <div className="books-container">
      <ul className="book-list">
        {books.sort((a, b) => a.id - b.id).map(book => 
          <BookCard key={book.id} book={book} />
        )}
      </ul>
    </div>
  )
}

export default BookList

import BookCard from "./BookCard";
import BookDetail from "./BookDetail";

function BookList({ books }) {
  return (
    <ul>
      {books.map(book => 
        <BookCard book={book} />
        // <BookDetail book={book} />
      )}
    </ul>
  )
}

export default BookList

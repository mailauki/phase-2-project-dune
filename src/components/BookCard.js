import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <li className="book-card">
      <Link to={`/books/${book.id}`}>
        <img src="" alt={book.name} className="image"/>
        {book.title}
      </Link>
    </li>
  )
}

export default BookCard
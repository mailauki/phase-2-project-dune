import { Link } from "react-router-dom";

function BookCard({ book }) {
  
  return (
    <li className="book-card">
      <Link to={`/books/${book.id}`}>
        <img src={book.image} alt={book.title} className="image"/>
      </Link>
    </li>
  )
}

export default BookCard
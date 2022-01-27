import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <li className="book-card">
      <Link to={`/books/${book.id}`}>
        <img src="https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg" alt={book.title} className="image"/>
        <h5>{book.title}</h5>
      </Link>
    </li>
  )
}

export default BookCard
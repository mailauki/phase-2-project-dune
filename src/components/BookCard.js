import { Link } from "react-router-dom";

function BookCard({ book }) {
  // if(book.image === "") {
  //   book.image = "https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg"
  // }
  
  return (
    <li className="book-card">
      <Link to={`/books/${book.id}`}>
        <img src={book.image} alt={book.title} className="image"/>
        {/* <h5>{book.title}</h5> */}
      </Link>
    </li>
  )
}

export default BookCard
import { Link } from "react-router-dom";

function BookDetail({ book }) {
  const { id, title, author, year, wiki_url } = book

  return (
    <div key={id} className="book-detail">
      <h3>{title}</h3>
      <h5>{author}</h5>
      <p>{year}</p>
      <Link to={wiki_url}>{title} Wiki</Link>
    </div>
  )
}

export default BookDetail

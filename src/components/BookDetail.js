import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams()
  const [detail, setDetail] = useState({})

  useEffect(() => {
    fetch(`https://the-dune-api.herokuapp.com/books/id/${id}`)
        .then(r => r.json())
        .then(data => setDetail(data))
  }, [id])


  const { title, author, year, wiki_url } = detail

  return (
    <div className="book-detail">
      {/* <h2>Book Detail</h2> */}
      <h3>{title}</h3>
      <h5>{author}</h5>
      <p>{year}</p>
      <Link to={wiki_url}>{title} Wiki</Link>
    </div>
  )
}

export default BookDetail

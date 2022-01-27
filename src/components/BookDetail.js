import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams()
  const [detail, setDetail] = useState({author: "loading..."})

  useEffect(() => {
    fetch(`https://the-dune-api.herokuapp.com/books/id/${id}`)
        .then(r => r.json())
        .then(data => setDetail(data))
  }, [id])


  const { title, author, year, wiki_url } = detail

  return (
    <div className="books-container">
      <div className="book-detail">
        <img src="https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg" alt={title} className="image"/>
        <div className="details">
          <h3>{title}</h3>
          {author.length === 2 ? author.map(a => <h5 key={a}>{a}</h5>) : <h5>{author}</h5>}
          <p>{year}</p>
          <Link to={`${wiki_url}`}>{title} Wiki</Link>
          <button onClick={() => alert("Review Button Clicked!")}>Review</button>
        </div>
      </div>
      <img src="https://user-images.githubusercontent.com/48391286/115104563-fcbaf400-9f76-11eb-912d-5d2b7a9f4933.jpg" alt="dune" className="cover-image" />
    </div>
  )
}

export default BookDetail

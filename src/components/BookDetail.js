import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";

function BookDetail() {
  const { id } = useParams()
  const [detail, setDetail] = useState({author: "loading..."})
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [image, setImage] = useState("https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg")
  const [series, setSeries] = useState("")
  const [review, setReview] = useState(null)
  const [status, setStatus] = useState("")

  useEffect(() => {
    fetch(`https://the-dune-api.herokuapp.com/books/id/${id}`)
        .then(r => r.json())
        .then(data => setDetail(data))

        fetch(`http://localhost:3001/books/${id}`)
        .then(r => r.json())
        .then(data => {
          setImage(data.image)
          setSeries(data.series)
          setReview(data.rating)
          setStatus(data.reading_status)
        })
  }, [id])


  const { title, author, year, wiki_url } = detail

  const form = isOpen ? <Form id={id} rating={rating} comment={comment} onRatingChange={value => setRating(value)} onCommentChange={value => setComment(value)} onSubmit={value => setIsOpen(value)} /> : <button onClick={() => setIsOpen(true)}>Review</button>

  function handleStatus(e) {
    fetch(`http://localhost:3001/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({reading_status: e.target.value})
    })
    .then(r => r.json())
    .then(data => setStatus(data.reading_status))
  }

  return (
    <div className="books-container">
      <div className="book-detail">
        <img src={image} alt={title} className="image"/>
        <div className="details">
          <h3>{title}</h3>
          {author.length === 2 ? author.map(a => <h4 key={a}>{a}</h4>) : <h4>{author}</h4>}
          <p>{year}</p>
          <p>{series}</p>

          <select className="reading-status" onChange={handleStatus} value={status}>
            <option value="">--- Select Reading Status ---</option>
            <option value="reading">Currently Reading</option>
            <option value="read">Read</option>
            <option value="to-read">Want to Read</option>
          </select>

          {review === null ? form : null}
        </div>
      </div>
      <img src="https://user-images.githubusercontent.com/48391286/115104563-fcbaf400-9f76-11eb-912d-5d2b7a9f4933.jpg" alt="dune" className="cover-image" />
    </div>
  )
}

export default BookDetail

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams()
  const [detail, setDetail] = useState({author: "loading..."})
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [image, setImage] = useState("https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg")
  const [series, setSeries] = useState("")

  useEffect(() => {
    fetch(`https://the-dune-api.herokuapp.com/books/id/${id}`)
        .then(r => r.json())
        .then(data => setDetail(data))

        fetch(`http://localhost:3001/books/${id}`)
        .then(r => r.json())
        .then(data => {
          setImage(data.image)
          setSeries(data.series)
          setRating(data.rating)
          setComment(data.comments)
        })
  }, [id])


  const { title, author, year, wiki_url } = detail

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {rating: Number(rating), comments: comment}
    // console.log(formData)

    fetch(`http://localhost:3001/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => console.log(data))

    // setRating(0)
    // setComment("")
    // setIsOpen(false)
  }

  return (
    <div className="books-container">
      <div className="book-detail">
        <img src={image} alt={title} className="image"/>
        <div className="details">
          <h3>{title}</h3>
          {author.length === 2 ? author.map(a => <h5 key={a}>{a}</h5>) : <h5>{author}</h5>}
          <p>{year}</p>
          <p>{series} Series</p>
          {/* <Link to={`${wiki_url}`}>{title} Wiki</Link> */}
          {isOpen ? 
          <form onSubmit={handleSubmit}>
            <div className="rating">
              <label>Rating: {rating} </label>
              <input type="range" id="rating" name="rating" min="0" max="5" onChange={(e) => setRating(e.target.value)} value={rating}></input>
            </div>
            <div className="comment">
              <label>Comments: </label>
              <textarea id="comment" name="comment" rows="5" cols="30" placeholder="comments and thoughts on this book..." onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
            </div>
            <input type="submit"></input>
          </form> 
          : <button onClick={() => setIsOpen(true)}>Review</button>}
        </div>
      </div>
      <img src="https://user-images.githubusercontent.com/48391286/115104563-fcbaf400-9f76-11eb-912d-5d2b7a9f4933.jpg" alt="dune" className="cover-image" />
    </div>
  )
}

export default BookDetail

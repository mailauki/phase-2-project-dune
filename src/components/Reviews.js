import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const [books, setBooks] = useState([])
  const [updatedBooks, setUpdatedBooks] = useState(books)

  useEffect(() => {
    fetch("https://the-dune-api.herokuapp.com/books/22")
    .then(r => r.json())
    .then(data => setBooks(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/books")
    .then(r => r.json())
    .then(data => {
      const updatedData = []
      data.map(data => {
        books.map(book => {
          if(data.id === book.id) {
            const newData = {...book, image: data.image, series: data.series, rating: data.rating, comments: data.comments}
            updatedData.push(newData)
          }
        })
      })
      setUpdatedBooks(updatedData)
    })
  }, [books])

  // console.log(updatedBooks)

  function handleRemove(id) {
    const formData = {rating: null, comments: ""}

    fetch(`http://localhost:3001/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
      const updatedData = []
      updatedBooks.map(book => {
        if(data.id === book.id) {
          updatedData.push(data)
        }
        else updatedData.push(book)
      })
      setUpdatedBooks(updatedData)
    })
  }

  return (
    <div className="reviews-container">
      <ul className="reviews">
        {updatedBooks.map(book => {
          if(book.rating !== null) {
            return <ReviewCard key={book.id} book={book} removeReview={handleRemove} />
          }
        })}
      </ul>
    </div>
  )
}

export default Reviews

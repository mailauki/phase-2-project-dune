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

  return (
    <div className="reviews-container">
      <ul className="reviews">
        {updatedBooks.map(book => {
          if(book.rating !== null) {
            return <ReviewCard key={book.id} book={book} />
          }
        })}
      </ul>
    </div>
  )
}

export default Reviews

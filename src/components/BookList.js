import { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  const [books, setBooks] = useState([])
  const [updatedBooks, setUpdatedBooks] = useState(books)
  const [filter, setFilter] = useState("")

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

  const filteredBooks = updatedBooks.filter(book => {
    const prettyFilter = filter.split("-").join(" ")
    if(book.series.toLowerCase().includes(prettyFilter)) return book
  })

  return (
    <div className="books-container">
      <label>Filter by Series: </label>
      <select name="filter" id="filter" onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="dune-chronicles">Dune Chronicles</option>
        <option value="legends-of-dune">Legends of Dune</option>
        <option value="prelude-to-dune">Prelude of Dune</option>
        <option value="heroes-of-dune">Heroes of Dune</option>
        <option value="schools-of-dune">Schools of Dune</option>
      </select>

      <ul className="book-list">
        {filteredBooks.sort((a, b) => a.id - b.id).map(book => 
          <BookCard key={book.id} book={book} />
        )}
      </ul>
    </div>
  )
}

export default BookList

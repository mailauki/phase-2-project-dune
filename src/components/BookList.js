import { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  const [books, setBooks] = useState([])
  const [updatedBooks, setUpdatedBooks] = useState(books)
  const [searchFilter, setSearchFilter] = useState("")

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

  const filteredBooks = updatedBooks
  .filter(book => {
    if(book.title.toLowerCase().includes(searchFilter.toLowerCase())) {
      return book
    }
    if(book.series.toLowerCase().includes(searchFilter.toLowerCase())) {
      return book
    }
    if(book.author.length === 2) {
      if(book.author[0].toLowerCase().includes(searchFilter.toLowerCase())) {
        return book
      }
      else if(book.author[1].toLowerCase().includes(searchFilter.toLowerCase())) {
        return book
      }
    }
    else {
      if(book.author.toLowerCase().includes(searchFilter.toLowerCase())) {
        return book
      }
    }
  })

  return (
    <div className="books-container">
      <div className="search-bar">
        <img src="https://freesvg.org/img/Minimal-Magnifying-Glass.png" alt="search-icon" className="icon" />
        <input placeholder="search by title, series, author, etc." list="search-filter" name="search-filter" id="search" onChange={(e) => setSearchFilter(e.target.value)} />
        <datalist id="search-filter">
          <option value="Dune Chronicles" />
          <option value="Legends of Dune" />
          <option value="Prelude to Dune" />
          <option value="Heroes of Dune" />
          <option value="Schools of Dune" />
        </datalist>
      </div>
      <ul className="book-list">
        {filteredBooks.sort((a, b) => a.id - b.id).map(book => 
          <BookCard key={book.id} book={book} />
        )}
      </ul>
    </div>
  )
}

export default BookList

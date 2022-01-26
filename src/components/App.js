import { useEffect, useState } from "react"

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("https://the-dune-api.herokuapp.com/books/22")
    .then(r => r.json())
    .then(data => setBooks(data))
  }, [])

  return (
    <div className="App">
      <h2>Dune</h2>
      <h3>Books</h3>
      {books.map(book => <p key={book.id}>{book.title}</p>)}
    </div>
  );
}

export default App;

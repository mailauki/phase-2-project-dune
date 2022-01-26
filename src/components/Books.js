import BookList from "./BookList";

function Books({ books }) {
  return (
    <>
      <h3>Books</h3>
      <BookList books={books} />
    </>
  )
}

export default Books

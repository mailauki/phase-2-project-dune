function BookCard({ book }) {
  return (
    <li key={book.id} className="book-card">
      <img src="" alt={book.name} className="image"/>
      {book.title}
    </li>
  )
}

export default BookCard
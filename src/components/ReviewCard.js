function ReviewCard({ book }) {
  return (
    <li className="review-card">
      <h3>{book.title}</h3>
      <p>Rating: {book.rating}</p>
      <h5>"{book.comments}"</h5>
      <button className="edit">Edit</button>
    </li>
  )
}

export default ReviewCard

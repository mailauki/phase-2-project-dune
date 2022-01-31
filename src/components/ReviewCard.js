import { useState } from "react";
import Form from "./Form";

function ReviewCard({ book }) {
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(book.rating)
  const [comment, setComment] = useState(book.comments)

  return (
    <li className="review-card">
      <h3>{book.title}</h3>
      <div>
        {isOpen ? 
        <Form id={book.id} rating={rating} comment={comment} onRatingChange={value => setRating(value)} onCommentChange={value => setComment(value)} onSubmit={value => setIsOpen(value)} />
        : 
        <div>
          <p>Rating: {rating}</p>
          <h5>"{comment}"</h5>
          <button className="edit" onClick={() => setIsOpen(true)}>Edit</button>
        </div>
        }
      </div>
    </li>
  )
}

export default ReviewCard

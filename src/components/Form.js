function Form({ id, rating, onRatingChange, comment, onCommentChange, onSubmit }) {

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {rating: Number(rating), comments: comment}

    fetch(`http://localhost:3001/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => console.log(data))

    onSubmit(false)
  }

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="rating">
        <label>Rating: {rating} </label>
        <input type="range" id="rating" name="rating" min="0" max="5" onChange={(e) => onRatingChange(e.target.value)} value={rating}></input>
      </div>
      <hr className="hr" />
      <div className="comment">
        <label>Comments: </label>
        <br/>
        <textarea id="comment" name="comment" rows="6" cols="30" placeholder="comments and thoughts on this book..." onChange={(e) => onCommentChange(e.target.value)} value={comment}></textarea>
      </div>
      <input type="submit" className="submit" />
    </form>
  )
}

export default Form

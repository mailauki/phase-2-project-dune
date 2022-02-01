function ReadingStatus({ status, onStatusChange }) {
  return (
    <select className="reading-status" onChange={onStatusChange} value={status}>
      <option value="">--- Select Reading Status ---</option>
      <option value="reading">Currently Reading</option>
      <option value="read">Read</option>
      <option value="to-read">Want to Read</option>
    </select>
  )
}

export default ReadingStatus

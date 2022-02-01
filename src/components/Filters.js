import SearchBar from "./SearchBar";
import ReadingStatus from "./ReadingStatus";

function Filters({ onSearchChange, status, onStatusChange }) {
  return (
    <div className="filter-container">
      <SearchBar onSearchChange={onSearchChange} />
      <ReadingStatus onStatusChange={onStatusChange} status={status} />
    </div>
  )
}

export default Filters

function SearchBar({ onSearchChange }) {
  return (
    <div className="search-bar">
      <img src="https://freesvg.org/img/Minimal-Magnifying-Glass.png" alt="search-icon" className="icon" />
      <input placeholder="search by title, series, author, etc." list="search-filter" name="search-filter" id="search" onChange={(e) => onSearchChange(e.target.value)} />
      <datalist id="search-filter">
        <option value="Dune Chronicles" />
        <option value="Legends of Dune" />
        <option value="Prelude to Dune" />
        <option value="Heroes of Dune" />
        <option value="Schools of Dune" />
      </datalist>
    </div>
  )
}

export default SearchBar

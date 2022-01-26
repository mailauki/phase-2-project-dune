import { useEffect, useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Books from "./Books";

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("https://the-dune-api.herokuapp.com/books/22")
    .then(r => r.json())
    .then(data => setBooks(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="contents-container">
        <Switch>
          <Route path="/books"><Books books={books} /></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

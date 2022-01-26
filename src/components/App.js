import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Books from "./Books";

function App() {
  const [books, setBooks] = useState([])
  const [quote, setQuote] = useState("")

  useEffect(() => {
    fetch("https://the-dune-api.herokuapp.com/books/22")
    .then(r => r.json())
    .then(data => setBooks(data))

    fetch("http://the-dune-api.herokuapp.com/quotes/1")
    .then(r => r.json())
    .then(data => setQuote(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="contents-container">
        <Switch>
          <Route path="/home"><Home quote={quote} /></Route>
          <Route path="/books"><Books books={books} /></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import Reviews from "./Reviews";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="contents-container">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/books"><BookList /></Route>
          <Route path="/books/:id"><BookDetail /></Route>
          <Route path="/reviews"><Reviews /></Route>
        </Switch>
      </div>
      <img src="https://user-images.githubusercontent.com/48391286/115104563-fcbaf400-9f76-11eb-912d-5d2b7a9f4933.jpg" alt="dune" className="cover-image" />
    </div>
  );
}

export default App;

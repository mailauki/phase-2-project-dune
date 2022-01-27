import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import BookList from "./BookList";
import BookDetail from "./BookDetail";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="contents-container">
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route exact path="/books"><BookList /></Route>
          <Route path="/books/:id"><BookDetail /></Route>
          <Route path="/reviews"><h3>Reviews</h3></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

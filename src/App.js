import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import Route from "react-router-dom";

import Home from "./pages/Home";
import SinglePhone from "./pages/SinglePhone";
import NavBar from "./components/NavBar";
import AddPhone from "./pages/AddPhone";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/phone/add" exact>
          <AddPhone />
        </Route>

        <Route path="/phone/:phoneId">
          <SinglePhone />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

      <NavBar />
    </Router>
  );
}

export default App;

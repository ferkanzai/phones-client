import { Route, Switch } from "react-router";

import AddPhone from "./pages/AddPhone";
import Home from "./pages/Home";
import SinglePhone from "./pages/SinglePhone";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/phone/add" exact>
          <AddPhone />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/phone/:phoneId">
          <SinglePhone />
        </Route>
      </Switch>

      <NavBar />
    </>
  );
}

export default App;

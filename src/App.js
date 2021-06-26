import { Route, Switch } from "react-router";

import Home from "./pages/Home";
import SinglePhone from "./pages/SinglePhone";
import NavBar from "./components/NavBar";
import AddPhone from "./pages/AddPhone";

import "./App.css";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

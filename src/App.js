import { Route, Switch } from "react-router";

import Home from "./pages/Home";
import SinglePhone from "./pages/SinglePhone";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Switch>
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

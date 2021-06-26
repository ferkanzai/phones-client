import { Route, Switch } from "react-router";

import Home from "./pages/Home";
import SinglePhone from "./pages/SinglePhone";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/phone/:phoneId">
        <SinglePhone />
      </Route>
    </Switch>
  );
}

export default App;

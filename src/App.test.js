import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

describe("App", () => {
  it("navbar is visible", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const app = screen.queryByTestId("navbar");
    expect(app).toBeVisible();
  });

  it("home is visible", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const homePage = screen.queryByTestId("home");
    expect(homePage).toBeVisible();
  });
});

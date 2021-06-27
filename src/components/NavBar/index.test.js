import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./index";

describe("NavBar", () => {
  it("navbar has two links", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    const links = screen.queryAllByTestId("navbar-link");
    expect(links.length).toBe(2);
    links.forEach((element) => {
      expect(element).toBeVisible();
    });
  });
});

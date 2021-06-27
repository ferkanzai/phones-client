import { render, screen } from "@testing-library/react";

import SinglePhone from "./index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    phoneId: "300",
  }),
  useRouteMatch: () => ({ url: "/phone/300" }),
}));

describe("Single Phone", () => {
  it("if no phone data, fallback test is displayed", () => {
    render(<SinglePhone />);

    const fallbackText = screen.queryByText("No phone found with this id");
    expect(fallbackText).toBeVisible();
  });
});

import { render, screen } from "@testing-library/react";

import SinglePhoneData from "./index";

describe("Single Phone Data", () => {
  it("single phone data visible", () => {
    render(<SinglePhoneData />);

    const phoneData = screen.queryByTestId("singlePhoneData");
    expect(phoneData).toBeVisible();
  });

  it("phone data info is visible", () => {
    render(<SinglePhoneData />);

    const data = screen.queryAllByTestId("phoneDataAndIcon");
    expect(data.length).toBeGreaterThanOrEqual(13);
    data.forEach((element) => {
      expect(element).toBeVisible();
    });
  });
});

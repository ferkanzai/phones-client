import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("navbar is visible", () => {
    render(<App />);

    const app = screen.queryByTestId("navbar");
    expect(app).toBeVisible();
  });

  // it('user can see the The Bridge text in two places', async () => {
  //   render(<App />);

  //   const learnReactElements = screen.queryAllByText('The Bridge', {
  //     exact: false, // Si ponemos exact: false, comprobamos que esté contenido y no el texto como tal por si solo
  //   });

  //   expect(learnReactElements.length).toBe(2);
  //   learnReactElements.forEach((element) => {
  //     expect(element).toBeVisible();
  //   });
  // });

  // it('the existing link has an href to google.es', () => {
  //   render(<App />);

  //   const googleLink = screen.queryByTestId('google-link');
  //   // Compruebo si es visible en caso de que aparezca SIEMPRE
  //   expect(googleLink).toBeVisible();
  //   // Si el elemento puede esconderse, compruebo que esté en el HTML
  //   // expect(googleLink).toBeInTheDocument();
  //   expect(googleLink).toHaveAttribute('href', 'https://google.es');
  // });
});

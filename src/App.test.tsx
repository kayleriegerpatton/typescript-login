import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders form title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Log in/);
  expect(linkElement).toBeInTheDocument();
});

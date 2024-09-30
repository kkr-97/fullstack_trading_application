import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../landingPage/Navbar";
import "@testing-library/jest-dom/extend-expect";

describe("Navbar Testing", () => {
  test("Render Nav Image", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logoImg = screen.getByAltText("zerodha logo");
    expect(logoImg).toBeInTheDocument();
  });
  test("Render Nav Image", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logoImg = screen.getByAltText("zerodha logo");
    const logoImgStyle = getComputedStyle(logoImg);
    expect(logoImgStyle.width).toBe("150px");
  });
});

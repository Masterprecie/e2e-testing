import { describe, it, expect } from "vitest";
import { HelloWorld } from "../../HelloWorld";
import { fireEvent, render, screen } from "@testing-library/react";

const add = (a, b) => a + b;

const testSample = [
  {
    a: 2,
    b: 3,
    expected: 5,
  },
  {
    a: -1,
    b: -3,
    expected: -4,
  },
];

describe("a simple test coverage", () => {
  it("it should display a text on my page", () => {
    render(<HelloWorld />);

    const readText = screen.getByText("Test Me");
    expect(readText).toBeInTheDocument();
  });
  it("it should toggle between light and dark mode when button is clicked", () => {
    render(<HelloWorld />);

    expect(screen.getByText("Light Mode")).toBeInTheDocument();
    const getBtn = screen.getByTestId("toggle-btn");
    fireEvent.click(getBtn);
    expect(screen.getByText("Dark Mode")).toBeInTheDocument();
  });
  it("it add two numbers", () => {
    testSample.forEach(({ a, b, expected }) => {
      const result = add(a, b);
      expect(result).toEqual(expected);
    });
  });
});

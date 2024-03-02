import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorMessage from "../../errorMessage/ErrorMessage";

describe("ErrorMessage", () => {
  it("renders default error state", () => {
    render(<ErrorMessage />);
    expect(screen.getByTestId("message-container")).toHaveTextContent(
      "Something went wrong"
    );
  });

  it("renders custom error state", () => {
    render(<ErrorMessage message="Custom Error" />);
    expect(screen.getByTestId("message-container")).toHaveTextContent(
      "Custom Error"
    );
  });
});

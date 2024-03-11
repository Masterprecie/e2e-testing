import { render, screen, fireEvent } from "@testing-library/react";
import FileUpload from "../../fieleUpload/FileUpload";

globalThis.URL.createObjectURL = () => "http://dummy.url";


describe("FileUpload", () => {
  it("renders without errors", () => {
    render(<FileUpload onFileSelect={() => {}} />);
    expect(screen.getByTestId("file-upload")).toBeInTheDocument();
  });

  it("displays upload icon and instruction text when no file is selected", () => {
    render(<FileUpload onFileSelect={() => {}} />);
    expect(screen.getByTestId("delete-button")).toBeInTheDocument();
    expect(
      screen.getByText("Browse Files to upload or Drag and Drop")
    ).toBeInTheDocument();
  });

  it("opens file input dialog when upload icon is clicked", () => {
    render(<FileUpload onFileSelect={() => {}} />);
    const uploadIcon = screen.getByTestId("delete-button");
    fireEvent.click(uploadIcon);
    const fileInput = screen.getByTestId("file-input");
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute("type", "file");
  });

  it("displays the uploaded file name", () => {
    render(<FileUpload onFileSelect={() => {}} />);
    const fileInput = screen.getByTestId("file-input");
    fireEvent.change(fileInput, {
      target: {
        files: [new File(["test.jpg"], "test.jpg", { type: "image/jpeg" })],
      },
    });
    expect(screen.getByText(/test\.jpg/)).toBeInTheDocument();
  });
});

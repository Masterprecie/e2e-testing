# File Upload Component

The `FileUpload` component is a React component that provides an interface for users to upload files. It supports both browsing for files and dragging and dropping files.

## Features

- **File Selection**: Users can click on the component to open a file dialog and select a file.
- **Drag and Drop**: Users can also drag and drop a file onto the component to upload it.
- **File Preview**: Once a file is selected, the component displays a preview of the file.
- **File Deletion**: Users can delete the selected file by clicking on the delete icon next to the file name.
- **Keyboard Accessibility**: The component can be focused and activated using the keyboard.

## Props

- `onFileSelect`: A callback function that is called when a file is selected or deleted. The function is called with the selected `File` object when a file is selected, and with `null` when the selected file is deleted.

## Usage

```jsx
<FileUpload onFileSelect={(file) => console.log(file)} />
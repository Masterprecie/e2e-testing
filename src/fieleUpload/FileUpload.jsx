import { useState, useRef } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "./fileUpload.css";
import propTypes from "prop-types";

export default function FileUpload({ onFileSelect }) {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No Selected File");
  const inputRef = useRef (null)

  const handleFileUpload = () => {
    inputRef.current?.click();
  };
  const handleFileChange = ({
    target: { files },
  }) => {
    if (files && files[0]) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
      onFileSelect(files[0]);
    } else {
      setFileName("No Selected File");
      onFileSelect(null);
    }
  };

  const handleDelete = () => {
    setFileName("No selected File");
    setImage(null);
    onFileSelect(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFileUpload();
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.items && event.dataTransfer.items[0]) {
      const file = event.dataTransfer.items[0].getAsFile();
      if (file) {
        setFileName(file.name);
        setImage(URL.createObjectURL(file));
        onFileSelect(file);
      }
    }
  };
  return (
    <main>
      <div
        data-testid="file-upload"
        className="file-upload-container"
        role="button"
        tabIndex={0}
        onClick={handleFileUpload}
        onKeyDown={handleKeyDown}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          ref={inputRef}
          onChange={handleFileChange}
          data-testid="file-input"
        />

        {image ? (
          <img src={image} width={150} height={150} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload
              color="#1475cf"
              size={60}
              data-testid="delete-button"
            />
            <p>Browse Files to upload or Drag and Drop </p>
          </>
        )}
      </div>

      <section className="uploaded-row">
        <AiFillFileImage color="#1475cf" className="icon" />
        <span className="upload-content" data-testid="no-selected">
          {fileName} -
          <MdDelete onClick={handleDelete} className="icon" />
        </span>
      </section>
    </main>
  );
}
FileUpload.propTypes = {
  onFileSelect: propTypes.func.isRequired,
}
import React, { useState } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import { URL } from "./constants";

const DragAndDropPDFUploader = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please drop a PDF file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };
  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleSubmit = async() => {
    const url = URL + "upload";
    const formData = new FormData();
    formData.append("cv", pdfFile);
    setLoading(true);
    await axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setMessage("PDF uploaded successfully");
      })
      .catch((err) => {
        setMessage("PDF upload failed");
      });
    clearMessage();
    setLoading(false);
  };

  return (
    <div
      className={`drag-drop-container + ${isDraggingOver && "above"}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <p>Drag & Drop PDF file here or click to upload</p>
      {pdfFile && (
        <div>
          <p>Uploaded PDF: {pdfFile.name}</p>
        </div>
      )}
      <p className="message">{message}</p>
      {loading && <Spinner />}
      {pdfFile && (
        <>
          <button
            onClick={() => {
              setPdfFile(null);
              setIsDraggingOver(false);
            }}
          >
            Delete PDF
          </button>
        </>
      )}
      <button className={!pdfFile && "disabled"} onClick={handleSubmit}>
        Submit PDF
      </button>
    </div>
  );
};

export default DragAndDropPDFUploader;

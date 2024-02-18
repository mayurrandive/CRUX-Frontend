import React from "react";
import PDFDropzone from "./PDFupload";
import Navbar from "./components/Navbar";

import Search from "./components/Search";

function App() {
  const handlePDFUpload = (file) => {
    console.log("Uploaded PDF:", file);
    // Do something with the uploaded PDF file
  };

  return (
    <div>
      <Navbar />
      <PDFDropzone />
      <Search />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./Search.css"; // Import your CSS filei
import Table from "./Table";
import axios from "axios";
import { URL } from "../constants";

function SearchComponent({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [resume, setResume] = useState([]);

  const handleSubmit =  async(event) => {
    event.preventDefault();
    onSearch(searchTerm); // Call the parent component's search function
    setSearchTerm(""); // Clear the input after submit
    await fetchData();
  };

  const fetchData = async () => {
    const url = URL + "resume";

    await axios
      .get(url)
      .then((res) => {
        setResume(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Table data={resume} />
    </>
  );
}

export default SearchComponent;

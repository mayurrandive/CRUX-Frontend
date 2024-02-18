import React from "react";
import "./Table.css";

function Table({ data }) {
  console.log(data);
  return (
    <table className="data-table">
    
      <thead>
        <tr>
          <th>Sr. no.</th>
          <th>Student Name</th>
          <th>College</th>
          <th>View Details</th>
        </tr>
      </thead>
      
      <tbody>
        {data.map((resume, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{resume.data.student_name}</td>
            <td>{resume.data.college.name}</td>
            <td>View</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

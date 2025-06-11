import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
function View() {
  const [update, setupdate] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/newsupdate`).then((res) => {
      setupdate(res.data);
    });
  });
  let deleteEvent = (id) => {
    axios.delete(`http://localhost:4000/newsupdate/${id}`).then((res) => {
      alert("Employe Deleted Successfully");
      setupdate(update.filter((item) => item.id !== id));
    });
  };
  return (
    <main className="table-responsive">
      <table className="table  table-hover table-bordered mt-5" id="example">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>date</th>
            <th>content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {update.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>{item.content}</td>
                <td className="d-flex justify-content-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteEvent(item.id);
                    }}
                  >
                    Delete
                  </button>
                  <NavLink to={`Update/${item.id}`}>
                    <button className="btn btn-warning mx-2">Edit</button>
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default View;

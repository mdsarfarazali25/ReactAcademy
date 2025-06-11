import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Update() {
  const { eid } = useParams();
  const [id, setid] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:4000/newsupdate/${eid}`).then((res) => {
      setid(res.data.id);
      setTitle(res.data.title);
      setDate(res.data.date);
      setContent(res.data.content);
    });
  }, [eid]);
  let updateEmp = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/newsupdate/${eid}`, {
        id,
        title,
        date,
        content,
      })
      .then((res) => {
        alert("Data Updated Successfully");
        setid("");
        setTitle("");
        setDate("");
        setContent("");
      });
  };
  return (
    <div style={{ width: "50%" }} className=" m-auto  mb-4">
      <h1 className="text-center">Edit Employe</h1>
      <form className=" border p-3 bg-secondary mx-auto" onSubmit={updateEmp}>
        <div className="d-flex"></div>
        <label className="text-dark">ID : </label>
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => setid(e.target.value)}
          readOnly
          placeholder="Enter Id"
          className="form-control mb-2"
          required
        />
        <label className="text-dark">Title : </label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="form-control mb-2"
        />
        <label className="text-dark">Date : </label>
        <input
          type="date"
          placeholder="Date"
          name="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="form-control mb-2"
        />
        <label className="text-dark">Content : </label>
        <textarea
          name="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="form-control mb-3"
        ></textarea>
        <button className=" form-control m-2 me-3 btn btn-primary mx-auto">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Update;

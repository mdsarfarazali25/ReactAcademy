import axios from "axios";
import React, { useState } from "react";

export default function Add() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  let AddnewEvent = (e) => {
    axios
      .post(`http://localhost:4000/newsupdate`, { id, title, date, content })
      .then((res) => {
        alert("Event Added Successfully");
        setId("");
        setTitle("");
        setDate("");
        setContent("");
      });
  };
  return (
    <main>
      <div className="container text-center my-3">
        <div className="row">
          <div className="col-12">
            <h3>New Events Updates</h3>
            <form
              className=" mx-auto mt-2 border  bg-secondary p-4 shadow rounded"
              style={{ width: "600px" }}
              onSubmit={(e) => {
                AddnewEvent(e);
              }}
            >
              <input
                type="text"
                placeholder="Id"
                name="id"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                className="form-control mb-3"
              />
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="form-control mb-3"
              />
              <input
                type="date"
                placeholder="Date"
                name="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                className="form-control mb-3"
              ></input>
              <textarea
                name="content"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                className="form-control mb-3"
              ></textarea>
              <button className="btn btn-primary w-100">Add</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

import React, { useState } from "react";
import style from "../Sample.module.css";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  let [username, setusername] = useState("");
  let [userpwd, setuserpwd] = useState("");
  let navigate = useNavigate();
  const actions = (e) => {
    e.preventDefault();
    if (username === "admin" && userpwd === "admin") {
      navigate("/AdminDashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };
  return (
    <main>
      <section className={style.breadcrumb}>
        <div className="container my-2">
          <div className="row">
            <div className="col-12 ">
              <h3>Admin</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row ">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 col-sm-12 ">
              <div className="mt-5  p-4 shadow rounded bg-light mb-5">
                <h2 className="text-danger mx-4">Admin Login </h2>
                <form onSubmit={actions}>
                  <div className="row mt-5 ">
                    <div className="col-xl-12 col-sm-12 mb-3">
                      <label className="d-flex">
                        Name : &nbsp;
                        <div id="NoteName" className="text-danger"></div>
                      </label>

                      <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={username}
                        onChange={(e) => {
                          setusername(e.target.value);
                        }}
                        className="form-control"
                      />
                    </div>
                    <div className="col-xl-12 col-sm-12 mb-3">
                      <label className="d-flex">
                        Password : &nbsp;
                        <div id="NoteName" className="text-danger"></div>
                      </label>

                      <input
                        placeholder="Password"
                        type="Password"
                        value={userpwd}
                        onChange={(e) => {
                          setuserpwd(e.target.value);
                        }}
                        name="pwd"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

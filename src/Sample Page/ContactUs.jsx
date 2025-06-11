import React, { Component } from "react";
import style from "./Sample.module.css";

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
    };
  }
  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  validateForm = (e) => {
    e.preventDefault();
    const { name, phone, email } = this.state;
    let aplhachar = /^[a-zA-Z]/;
    let phonechar = /^[0-9]+$/;
    let emailchar = /^[a-z0-9]+@[a-z0-9]+[.com]+$/;
    if (name === "") {
      document.getElementById("NoteName").innerHTML =
        "Please fill all the Details";
    } else {
      if (name.match(aplhachar)) {
        document.getElementById("NoteName").innerHTML = "";
      } else {
        document.getElementById("NoteName").innerHTML =
          "Name should be alphabets only";
      }
    }
    if (phone === "") {
      document.getElementById("NotePhone").innerHTML =
        "Please fill all the fields";
    } else {
      if (phone.match(phonechar)) {
        document.getElementById("NotePhone").innerHTML = "";
      } else {
        document.getElementById("NotePhone").innerHTML =
          "Phone should be Numbers only";
      }
    }
    if (email === "") {
      document.getElementById("NoteEmail").innerHTML =
        "Please fill all the fields";
    } else {
      if (email.match(emailchar)) {
        document.getElementById("NoteEmail").innerHTML = "";
      } else {
        document.getElementById("NoteEmail").innerHTML =
          " Email Should be 'Charecter' 'Number' '@' and '.com' ";
      }
    }
  };
  render() {
    const { name, phone, email } = this.state;
    return (
      <main>
        <section className={style.breadcrumb}>
          <div className="container my-2">
            <div className="row">
              <div className="col-12 ">
                <h3>Contact Us</h3>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row ">
              <div className="col-lg-8 col-sm-12 ">
                <div className="mt-5  p-4 shadow rounded bg-light mb-5">
                  <h2 className="text-danger mx-4">For Inquiry : </h2>
                  <form onSubmit={this.validateForm}>
                    <div className="row mt-5 ">
                      <div className="col-xl-6 col-sm-12 mb-3">
                        <label className="d-flex text-info-emphasis">
                          Name : &nbsp;
                          <div id="NoteName" className="text-danger"></div>
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={this.changeName}
                          className="form-control"
                        />
                      </div>
                      <div className="col-xl-6 col-sm-12 mb-3">
                        <label className="d-flex text-info-emphasis">
                          Phone No :&nbsp;{" "}
                          <div id="NotePhone" className="text-danger"></div>
                        </label>
                        <input
                          type="tel:"
                          name="phone"
                          value={phone}
                          onChange={this.changePhone}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-12 mb-3">
                        <label className="d-flex text-info-emphasis">
                          Email : &nbsp;
                          <div
                            id="NoteEmail"
                            className="text-danger"
                          ></div>{" "}
                        </label>
                        <input
                          type="emails"
                          name="email"
                          value={email}
                          onChange={this.changeEmail}
                          className="form-control"
                        />
                      </div>
                      <div className="col-xl-6 col-sm-12m b-3">
                        <label className="d-flex text-info-emphasis">
                          Select : &nbsp;
                          <div className="text-danger"></div>{" "}
                        </label>
                        <select name="course" className="form-control">
                          <option value="">Choose a Course</option>
                          <option value="java">Java</option>
                          <option value="python">Python</option>
                          <option value="mern">MERN</option>
                          <option value="sql">SQL</option>
                          <option value="php">PHP</option>
                        </select>
                      </div>
                    </div>

                    <div className=" mb-3">
                      <label className="d-flex text-info-emphasis">
                        Message : &nbsp;
                        <div className="text-danger"></div>{" "}
                      </label>
                      <textarea
                        name="message"
                        placeholder="Any Query or Message"
                        className="form-control"
                        rows="3"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 mt-5  shadow rounded bg-light mb-5">
                <h2 className="text-danger px-1">Our Location</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0449755674904!2d78.47208957382838!3d17.361568703551118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e1a939b%3A0xcb5a69e4aaf113fb!2sCharminar!5e0!3m2!1sen!2sin!4v1741855537954!5m2!1sen!2sin"
                  className=""
                  title="Map of Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

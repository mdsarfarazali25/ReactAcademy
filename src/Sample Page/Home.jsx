import React, { useEffect, useState } from "react";
import style from "./Sample.module.css";
import axios from "axios";
import banerimg1 from "../Staticweb_Assets/s1.png";
import banerimg2 from "../Staticweb_Assets/s2.png";
import banerimg3 from "../Staticweb_Assets/s3.png";
import img1 from "../Staticweb_Assets/full-stack-dev-min.jpg";
import img2 from "../Staticweb_Assets/jfc.jpg";
import img3 from "../Staticweb_Assets/python1.jpg";
import img4 from "../Staticweb_Assets/python2.jpg";
import img5 from "../Staticweb_Assets/reactjs.webp";
import img6 from "../Staticweb_Assets/ui.webp";
export default function Home() {
  let [list, setlist] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/newsupdate`).then((res) => {
      setlist(res.data);
    });
  });
  return (
    <main>
      <section className={style.carousel}>
        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-12">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={banerimg1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={banerimg2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={banerimg3} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev  "
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon bg-dark rounded-circle"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon bg-dark rounded-circle "
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="text-center mbcenter py-1">
                  Welcome to{" "}
                  <span className="text-danger">FrontEnd Trainings</span>{" "}
                </h3>
              </div>
              <div className="about-cont">
                <p>
                  FrontEnd Trainings is a Hyderabad based Training Institute
                  delivering classroom and online trainings in India, USA and
                  UK, Australia. We are Providing high quality training is our
                  core value. We offer both classroom and online training on
                  niche technologies which are in high demand. All our trainers
                  are IT professionals with rich experience.
                </p>
                <p>
                  FrontEnd Trainings is a leading training and placement company
                  in hyderabad managed by industry experts with more than 9+
                  years of experience in leading MNC Companies. We arewellknown
                  for our practical approach towards training that enables
                  students to gain realtime exposure.
                </p>
                <p>
                  FrontEnd Trainings is a one-stop shop for IT courses, Web
                  Development services & Recruitment services. FrontEnd
                  Trainings concentrates on its vision of building up strong
                  client and business partnerships. To this end, FrontEnd
                  Trainings offers Real-time and placement focuses training
                  services.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <h3 className="text-warning text-center">Notice</h3>
              <div className="border border-2 border-dark rounded-3 m-2 ">
                <div
                  className=" bg-success text-white p-2"
                  style={{ height: "300px" }}
                >
                  <marquee behavior="scroll" direction="up" height="100%">
                    {list.map((item, index) => {
                      return (
                        <div key={index} className="mb-2">
                          <h5 className="text-info">
                            <i className="fa-solid fa-hand-point-right"></i>
                            &nbsp;&nbsp;
                            {item.title}
                          </h5>
                          <p>{item.date}</p>
                          <p>{item.content}</p>
                          <hr />
                        </div>
                      );
                    })}
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <h3 className="text-center mbcenter py-1">
              Our to <span className="text-danger">Servises</span>{" "}
            </h3>
            <div className="col-lg-3 mb-2">
              <img src={img1} alt="" className="w-100" />
              <h4 className="text-center">MERN FullStack </h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img2} alt="" className="w-100" />
              <h4 className="text-center">Java FullStack</h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img6} alt="" className="w-100" />
              <h4 className="text-center">Python FullStack</h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img3} alt="" className="w-100" />
              <h4 className="text-center">UI/UX Designing</h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img4} alt="" className="w-100" />
              <h4 className="text-center">REACT JS</h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img5} alt="" className="w-100" />
              <h4 className="text-center">MERN FullStack </h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img2} alt="" className="w-100" />
              <h4 className="text-center">Java FullStack</h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img6} alt="" className="w-100" />
              <h4 className="text-center">Python FullStack</h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img3} alt="" className="w-100" />
              <h4 className="text-center">UI/UX Designing</h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img4} alt="" className="w-100" />
              <h4 className="text-center">REACT JS</h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img5} alt="" className="w-100" />
              <h4 className="text-center">MERN FullStack </h4>
            </div>
            <div className="col-lg-3 mb-2">
              <img src={img2} alt="" className="w-100" />
              <h4 className="text-center">Java FullStack</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

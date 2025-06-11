import React from "react";
import style from "./Sample.module.css";
import img1 from "../Staticweb_Assets/full-stack-dev-min.jpg";
import img2 from "../Staticweb_Assets/jfc.jpg";
import img3 from "../Staticweb_Assets/python1.jpg";
import img4 from "../Staticweb_Assets/python2.jpg";
import img5 from "../Staticweb_Assets/reactjs.webp";

function Gallery() {
  return (
    <main className={style.gallery}>
      <section className={style.breadcrumb}>
        <div className="container mb-3">
          <div className="row">
            <div className="col-12 ">
              <h3> Gallery </h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img1} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img2} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img5} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img3} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img4} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img1} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img2} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img5} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img3} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img4} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img5} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img3} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img4} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img1} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img2} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img5} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img3} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img4} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="">
                <img src={img1} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Gallery;

import React from "react";
import style from "./Sample.module.css";
import img1 from "../Staticweb_Assets/reactjs.webp";
import img2 from "../Staticweb_Assets/python2.jpg";
import img3 from "../Staticweb_Assets/s3.png";
import img4 from "../Staticweb_Assets/python1.jpg";
export default function Servises() {
  return (
    <main>
      <section className={style.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h3>Servises</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={style.Servises}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="my-2">
                Hyderabad IT Trainings is a Hyderabad based IT Software Training
                & Recruitment Company delivering classroom and online trainings
                in India, USA and UK, Australia, Canada, Singapore. Being the
                leader in Software courses classroom training & online training
                sector, Hyderabad IT Trainings holds the top position in short
                time. Our core values are providing high quality and project
                oriented training at affordable fees. We offer classroom and
                online training on all technologies which are in high demand.
                All our trainers are IT professionals with rich experience.
              </p>
            </div>
            <div className="col-lg-4 my-2">
              <img src={img1} alt="" className="mt-20 w-100 h-100" />
            </div>

            <div className="col-lg-8 my-2">
              <h4 className="mt-25 color">Online Training</h4>
              <p className="mt-15">
                Online training is a method of delivering training through an
                electronic medium without the immediate presence of a human
                trainer. By taking advantage of technology, Online Training can
                be more cost effective by delivering more knowledge in a more
                efficient manner. Hyderabad IT Trainings is offering{" "}
                <strong>
                  Software courses online Training using its vast Technology
                  Expertise for the benefit of the students in transforming
                  their dreams into reality.
                </strong>{" "}
                We offer Online Software Training sessions to cater the training
                requirements of the Aspirants who cannot attend Classroom
                Training.
              </p>
            </div>
            <div className="col-lg-8 my-2">
              <h4 className="mt-25 color">Offline Training</h4>

              <p className="mt-25">
                Hyderabad IT Trainings is a leading IT courses Classroom
                training Institute in Hyderabad, India. We are a well-respected
                company that has been in the training platform for over a
                decade. In everything we do we make an effort to deliver
                quality.{" "}
                <strong>
                  With Classroom Training opted from Hyderabad IT Trainings, you
                  can develop skills that directly and transfer from the
                  classroom to the workplace.
                </strong>{" "}
                Each Software classroom training course includes the planning,
                design, implementation, management, and support phases of the
                technology adoption of the course.
              </p>
            </div>
            <div className="col-lg-4 my-2">
              <img src={img2} alt="" className="mt-20" />
            </div>
            <div className="col-lg-4 my-2">
              <img
                src={img3}
                alt=""
                className="mt-20"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="col-lg-8 my-2">
              <h4 className="mt-25 color">Online Training</h4>
              <p className="mt-15">
                Online training is a method of delivering training through an
                electronic medium without the immediate presence of a human
                trainer. By taking advantage of technology, Online Training can
                be more cost effective by delivering more knowledge in a more
                efficient manner. Hyderabad IT Trainings is offering{" "}
                <strong>
                  Software courses online Training using its vast Technology
                  Expertise for the benefit of the students in transforming
                  their dreams into reality.
                </strong>{" "}
                We offer Online Software Training sessions to cater the training
                requirements of the Aspirants who cannot attend Classroom
                Training.
              </p>
            </div>
            <div className="col-lg-8 my-2">
              <h4 className="mt-25 color">Offline Training</h4>

              <p className="mt-25">
                Hyderabad IT Trainings is a leading IT courses Classroom
                training Institute in Hyderabad, India. We are a well-respected
                company that has been in the training platform for over a
                decade. In everything we do we make an effort to deliver
                quality.{" "}
                <strong>
                  With Classroom Training opted from Hyderabad IT Trainings, you
                  can develop skills that directly and transfer from the
                  classroom to the workplace.
                </strong>{" "}
                Each Software classroom training course includes the planning,
                design, implementation, management, and support phases of the
                technology adoption of the course.
              </p>
            </div>
            <div className="col-lg-4 my-2">
              <img src={img4} alt="" className="mt-20" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

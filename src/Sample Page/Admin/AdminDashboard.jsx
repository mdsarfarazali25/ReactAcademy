import React from "react";
import style from "../Sample.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <main>
      <section className={style.breadcrumb}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Admin DashBord</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-2 bg-light shadow rounded  my-3 text-center h-25">
              <div>
                <h5 className="text-dark">Dash Board</h5>
                <ul className={style.Dashbord}>
                  <li className="pb-3">
                    <NavLink to="">View</NavLink>
                  </li>
                  <li className="pb-3">
                    <NavLink to="Add">Add</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-10 ">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./About";
import Gallery from "./Gallery";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Servises from "./Servises";
import NoPage from "./NoPage";
import Admin from "./Admin/Admin";
import AdminDashboard from "./Admin/AdminDashboard";
import Add from "./Admin/Add";
import Update from "./Admin/Update";
import View from "./Admin/View";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Servises" element={<Servises />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />}>
          <Route path="" element={<View />} />
          <Route path="Add" element={<Add />} />
          <Route path="Update/:eid" element={<Update />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default Routing;

import React from "react";

const NoPage = () => {
  setTimeout(() => {
    window.location = "/";
  }, 3000);
  return (
    <>
      <h1 className="pt-4 text-center">404 Page Not Found</h1>
      <p className="pb-4 text-center">please wait...</p>
    </>
  );
};

export default NoPage;

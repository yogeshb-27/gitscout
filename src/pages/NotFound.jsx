import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-32">
      <h1 className="text-black mb-6 text-2xl">404 - Not Found</h1>
      <p className="mb-6"> Redirect yourself to the homepage</p>
      <Link to="/" className="text-blue-500 ">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

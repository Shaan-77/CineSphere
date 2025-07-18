import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Errorpage = () => {
  const navigate = useNavigate();

  const handlegoback = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>404 error page</h1>;
      <NavLink to="/">
        <button className="btn btn-warning">Go back to home page</button>
      </NavLink>
      <button className="btn btn-info" onClick={handlegoback}>
        Go back
      </button>
    </div>
  );
};

export default Errorpage;

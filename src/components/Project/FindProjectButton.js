import React from "react";
import { Link } from "react-router-dom";

const FindProjectButton = () => {
  return (
    <React.Fragment>
      <Link to="/addProject" className="btn btn-lg btn-success">
        Earn Money
      </Link>
    </React.Fragment>
  );
};

export default FindProjectButton;
 
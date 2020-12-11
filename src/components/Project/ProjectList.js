import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import classnames from "classnames";

class ProjectList extends Component {
  
  
  render() {
    

    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Projects available</h5>
                <h1>heloo</h1>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default ProjectList;

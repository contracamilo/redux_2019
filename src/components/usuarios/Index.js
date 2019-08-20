import React, { Component } from "react";

import { connect } from "react-redux";
import { getAll } from "../../actions/userActions";
import Spinner from "../common/Spinner";
import Fatal from "../common/Fatal";
import Tabla from "./Tabla";

class Usuarios extends Component {

  render() {
    
    return (
      <React.Fragment>
        <div className="container">
        <h1>Usuarios</h1>
         
        </div>
      </React.Fragment>
    );
  }
}

export default Usuarios;

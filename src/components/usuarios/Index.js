import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { getAll } from "../../actions/userActions";
import Spinner from "../common/Spinner";
import Fatal from "../common/Fatal";
import Tabla from "./Tabla";

class Usuarios extends Component {
  componentDidMount() {
    if(!this.props.usuarios.lenght){
      this.props.getAll();
    }
  }

  putContent = () => {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }

    return <Tabla />;
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="container">
        <h1>Usuarios</h1>
          {this.putContent()}
          <Button color="danger">Danger!</Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.UsuariosReducer;
};

export default connect(
  mapStateToProps,
  { getAll }
)(Usuarios);

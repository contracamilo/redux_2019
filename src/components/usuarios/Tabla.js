import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { Link } from "react-router-dom"
import '../../css/iconos.css'

const Tabla = props => {
    console.log(props);
    const ponerFilas = () =>
    props.usuarios.map((usr, index) => (
      <tr key={index + 1}>
        <th scope="row">{index + 1} </th>
        <td>{usr.name}</td>
        <td>{usr.email}</td>
        <td>{usr.website}</td>
        <td> <Link to={`publications/${usr.id}`}><div className="eye-solid2 icon"></div></Link> </td>
      </tr>
    ));

  return (
    <Table className="tabla">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>{ponerFilas()}</tbody>
    </Table>
  );
};

const mapStateToProps = reducers => {
  return reducers.UsuariosReducer;
};

export default connect(mapStateToProps)(Tabla);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getAll } from "../../actions/userActions";
import { getByUser } from "../../actions/publicationsActions";
import Spinner from "../common/Spinner";
import Fatal from "../common/Fatal";

class Publications extends Component {
  async componentDidMount() {
    const {
      UsuariosReducer,
      getAll,
      getByUser,
      match: {
        params: { key }
      }
    } = this.props;

    
    if(!UsuariosReducer.usuarios.lenght) {
      await getAll();
    }
    if(this.props.UsuariosReducer.error) {
      return
    }
    if (!("posts_key" in  UsuariosReducer.usuarios[key] )) {
       getByUser(key);
    }
  }

  ponerUsuario = () => {
    const {
      UsuariosReducer,
      match: {
        params: { key }
      }
    } = this.props;

    if( UsuariosReducer.error) {
      return <Fatal message={UsuariosReducer.error}/>;
    }

    if (!UsuariosReducer.usuarios.lenght && UsuariosReducer.loading) {
      return <Spinner />;
    }

    const nombre = UsuariosReducer.usuarios[key].name;
    
    return (
      <h2>Publicaciones de: {nombre}</h2>
    )

  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        
        {this.props.match.params.key}
        {this.ponerUsuario()}
      </div>
    );
  }
}
const mapStateToProps = ({ UsuariosReducer, PublicationsReducer }) => {
  return {
    UsuariosReducer,
    PublicationsReducer
  };
};

const mapDispatchToProps = {
  getAll,
  getByUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Publications);

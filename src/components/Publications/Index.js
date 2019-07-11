import React, { Component } from 'react'
import { connect } from "react-redux";
import { getAll } from "../../actions/userActions";
import { getByUser } from "../../actions/publicationsActions";

class Publications extends Component {

  async componentDidMount() {
    if(!this.props.UsuariosReducer.usuarios.lenght){
        await this.props.getAll()
    }

    await this.props.getByUser(this.props.match.params.key)
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h2>Publicaciones de:</h2>
        {this.props.match.params.key} 
      </div>
    )
  }
}
const mapStateToProps = ({UsuariosReducer, PublicationsReducer}) => {
  return { 
    UsuariosReducer,
    PublicationsReducer
  }
};

const mapDispatchToProps = {
    getAll,
    getByUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications)

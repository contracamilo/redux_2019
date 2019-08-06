import React, { Component } from "react";
import { connect } from "react-redux";
import { getAll } from "../../actions/userActions";
import { Card, CardText, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';
import { getByUser } from "../../actions/publicationsActions";
import Spinner from "../common/Spinner";
import Fatal from "../common/Fatal";
import '../../css/cards.css'

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

   

    const nombre = UsuariosReducer.usuarios[key].name;
    
    if ( UsuariosReducer.error) {
      return <Fatal message={UsuariosReducer.error}/>;
    }

    if (!UsuariosReducer.usuarios.lenght && UsuariosReducer.loading) {
      return <Spinner />;
    }

    return (
      <>
        <h2>Publicaciones de: {nombre}</h2>
      </>
    )

  };

  setPublications = () => {
    const { 
      UsuariosReducer,
      UsuariosReducer: { usuarios },
      PublicationsReducer,
      PublicationsReducer: { publications },
      match: {
        params: { key }
      }
      
    } = this.props


    //if(!usuarios.lenght) return;
    //if(UsuariosReducer.error) return;
    if(PublicationsReducer.error) {return <Fatal message={PublicationsReducer.error}/>;}
    if(PublicationsReducer.loading) {return <Spinner/>}
    //if(!publications.lenght) return;
    if (!("posts_key" in  UsuariosReducer.usuarios[key] )) return;

    const { posts_key } = usuarios[key];

    console.log(publications);

    return publications[posts_key].map((post) => (
      <Col xs="12" sm="4" className="card-u">
        <Card onClick={()=> alert(post.id) }>
          <CardBody>
            <CardTitle><h4>{post.title}</h4></CardTitle>
            <CardText>{post.body}</CardText>
          </CardBody>
        </Card>
      </Col>
    ))
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        {this.props.match.params.key}
        {this.ponerUsuario()}
        <Row>
          {this.setPublications()}
        </Row>
      </Container>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { getAll } from "../../actions/userActions";
import { Card, CardText, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';
import { getByUser, openClose } from "../../actions/publicationsActions";
import Spinner from "../common/Spinner";
import Fatal from "../common/Fatal";
import '../../css/cards.css'

class Publications extends Component {

  render() {
    
    return (
      <Container>
        
        <Row>
         
        </Row>
      </Container>
    );
  }
}


export default Publications;

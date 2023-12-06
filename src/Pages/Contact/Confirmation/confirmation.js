import React from "react";
import './confirmation.css'

import {
  Col,
  Row,
  Container,
} from "react-bootstrap";
import { Button } from "antd";


const Confirmation = () => {
  return (
    <Row>
      <Col>
        <Container className='confirmation'>
        <Button className='cardButton'> <a href='/' rel="noopener noreferrer"> Home </a> </Button>
          <h1 className=''>Thank you</h1>
          <p className=''>We have received your message and will be in touch soon!</p>
        </Container>
      </Col>
    </Row>
  );
};

export default Confirmation;
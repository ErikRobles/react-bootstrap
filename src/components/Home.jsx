import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to RR Spark</h2>
          <p>This site was built with React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
          <Image src="./assets/person-1.jpg" circle className="profile-pic" />
          <h3>Frank</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque sunt exercitationem fugiat est dolore ex perspiciatis pariatur cupiditate quia corrupti voluptatibus nostrum nam sint, laborum odit in natus architecto.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
          <Image src="~assets/person-3.jpg" circle className="profile-pic" />
          <h3>Vanessa</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque sunt exercitationem fugiat est dolore ex perspiciatis pariatur cupiditate quia corrupti voluptatibus nostrum nam sint, laborum odit in natus architecto.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/person-4.jpg" circle className="profile-pic" />
          <h3>Riff</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque sunt exercitationem fugiat est dolore ex perspiciatis pariatur cupiditate quia corrupti voluptatibus nostrum nam sint, laborum odit in natus architecto.</p>
          </Col>
          </Row>
          <Col xs={12} sm={12} className="bodyText">
            <h3>Body Text Goes Here</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque sunt exercitationem fugiat est dolore ex perspiciatis pariatur cupiditate quia corrupti voluptatibus nostrum nam sint, laborum odit in natus architecto.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque sunt exercitationem fugiat est dolore ex perspiciatis pariatur cupiditate quia corrupti voluptatibus nostrum nam sint, laborum odit in natus architecto.</p>
          </Col>
      </Grid>
    )
  }
}
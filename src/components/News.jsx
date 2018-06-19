import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';


export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image"/>
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
            <p>We artists are a different breed of people. We're a happy bunch. It's important to me that you're happy. Poor old tree. How do you make a round circle with a square knife? That's your challenge for the day. That's what painting is all about. It should make you feel good when you paint.</p>

            <p>I sincerely wish for you every possible joy life could bring. Isn't that fantastic? I can't think of anything more rewarding than being able to express yourself to others through painting. Let's put some highlights on these little trees. The sun wouldn't forget them. Let's have a nice tree right here.</p>

            <p>You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush. In life you need colors. Don't forget to tell these special people in your life just how special they are to you. Anything you want to do you can do here. Maybe he has a little friend that lives right over here.</p>

            <p>When you do it your way you can go anywhere you choose. No worries. No cares. Just float and wait for the wind to blow you around. Use what you see, don't plan it.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>We artists are a different breed of people. We're a happy bunch. It's important to me that you're happy. Poor old tree. How do you make a round circle with a square knife? That's your challenge for the day. That's what painting is all about. It should make you feel good when you paint.</p>
            </Col>
          </Row>
          <Col xs={12} sm={12} className="bodyText">
            <h3>Body Text Goes Here</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque sunt exercitationem fugiat est dolore ex perspiciatis pariatur cupiditate quia corrupti voluptatibus nostrum nam sint, laborum odit in natus architecto.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque sunt exercitationem fugiat est dolore ex perspiciatis pariatur cupiditate quia corrupti voluptatibus nostrum nam sint, laborum odit in natus architecto.</p>
          </Col>
        </Grid> 
      </div>
    )
  }
}
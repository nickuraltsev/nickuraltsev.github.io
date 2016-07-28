import React from 'react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { config } from 'config';

const Page = (props) =>
  <div>
    <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand><a href="/">{config.siteTitle}</a></Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/Resume/">Résumé</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://github.com/nickuraltsev">GitHub</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Grid>
      <Row>
        <Col sm={12}>
          {props.children}
        </Col>
      </Row>
    </Grid>
  </div>;

export default Page;

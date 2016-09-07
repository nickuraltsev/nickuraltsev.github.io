import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavItem } from 'react-bootstrap';
import { config } from 'config';

import '../assets/styles/main.scss';
import 'font-awesome/scss/font-awesome.scss';

const Navbar = ({ activeHref }) => {
  const { Header, Brand, Toggle, Collapse } = BootstrapNavbar;
  return (
    <BootstrapNavbar inverse fixedTop>
      <Header>
        <Brand><a href="/">{config.siteTitle}</a></Brand>
        <Toggle />
      </Header>
      <Collapse>
        <Nav activeHref={activeHref}>
          <NavItem eventKey={1} href="/Resume/">Résumé</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://github.com/nickuraltsev">GitHub</NavItem>
        </Nav>
      </Collapse>
    </BootstrapNavbar>
  );
};

const Footer = () =>
  <footer>
    <div className="container">
      <p className="text-muted">
        © 2016 Nick Uraltsev
      </p>
    </div>
  </footer>;

const Page = (props) =>
  <div>
    <Navbar activeHref={props.location.pathname} />
    {props.children}
    <Footer />
  </div>;

export default Page;

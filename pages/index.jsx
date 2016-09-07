import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const SocialButton = ({ iconName, uri }) =>
  <a href={uri} className="btn btn-primary btn-social">
    <i className={`fa fa-${iconName} fa-lg`} />
  </a>;

const HomePage = () =>
  <div>
    <Jumbotron>
      <div className="container">
        <h1>Hi, I'm Nick Uraltsev</h1>
        <p>
          I am a Software Engineer based in San Franciso Bay Area.
          I am passionate about building high-quality software with clean, readable, and maintainable code.
        </p>
        <div>
          <a
            href="/Resume/"
            className="btn btn-success btn-lg">
            View Résumé
          </a>
        </div>
      </div>
    </Jumbotron>

    <div className="container social-buttons">
      <SocialButton iconName="envelope" uri="mailto:nick.uraltsev@gmail.com" />
      <SocialButton iconName="twitter" uri="https://twitter.com/nickuraltsev" />
      <SocialButton iconName="github" uri="https://github.com/nickuraltsev" />
      <SocialButton iconName="stack-overflow" uri="http://stackoverflow.com/users/6218152/nick-uraltsev" />
      <SocialButton iconName="linkedin" uri="https://www.linkedin.com/in/nickuraltsev" />
    </div>

  </div>;

export default HomePage;

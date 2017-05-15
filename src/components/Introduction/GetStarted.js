import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import css from 'css-template';

const headerStyles = css`
  font-size: 48px;
  font-weight: 500;
  background: -webkit-linear-gradient(left, #ff7178 , #ffab40);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0;
  margin-bottom: 36px;
  letter-spacing: 1.5px;
`;

const subHeaderStyles = css`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 18px;
  font-weight: 400;
`;

const contentStyles = css`
  margin-bottom: 72px;
  line-height: 24px;
`;

const linkStyles = css`
  display: inline-block;
  margin-bottom: 24px;
`;

const GetStarted = () => (
  <div>
    <h1 style={headerStyles}>
      AirLaLa
    </h1>
    <h4 style={subHeaderStyles}>Gift wonderfully</h4>
    <p style={contentStyles}>
      AirLala is simple, sopisticated way to give incredibly thoughtful gifts.
    </p>

    <Link to="/getStarted" style={linkStyles}>
      <RaisedButton primary label="Get Started" />
    </Link>

    <div>
      Already have an account?
      <Link to="/login">
        <strong> Sign in</strong>
      </Link>
    </div>
  </div>
);

export default GetStarted;

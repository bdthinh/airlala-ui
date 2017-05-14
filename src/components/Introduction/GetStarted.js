import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const GetStarted = () => (
  <div>
    <h1>
      AirLala
    </h1>
    <div>Gift wonderfully</div>
    <div>AirLala is simple, sopisticated way to give incredibly thoughtful gifts.</div>
    <Link to="/getStarted">
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

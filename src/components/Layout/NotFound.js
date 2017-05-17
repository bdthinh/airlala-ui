import React from 'react';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import css from 'css-template';
import HomeIcon from 'material-ui/svg-icons/action/home';

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
  margin-bottom: 12px;
  line-height: 24px;
`;

const linkStyles = css`
  display: inline-block;
  margin-bottom: 24px;
`;

const introductionStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
  padding: 6px 24px 0;
`;

const NotFound = () => (
  <div style={introductionStyles}>
    <h1 style={headerStyles}>
      AirLaLa
    </h1>
    <h4 style={subHeaderStyles}>Gift wonderfully</h4>
    <p style={contentStyles}>
      Seem you are lost in strange area. Let Airlala help you find out the best gifts.
    </p>

    <Link to="/" style={linkStyles}>
      <IconButton
        style={{ width: '240px', height: '240px' }}
        iconStyle={{ width: '120px', height: '120px' }}
      >
        <HomeIcon />
      </IconButton>
    </Link>
  </div>
);

export default NotFound;

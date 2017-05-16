import React from 'react';
import css from 'css-template';

const getAbbreviation = str => str.match(/[A-Z|0-9]/g).join('');

const abbreviationStyles = css`
  width: 48px;
  height: 48px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.5px;
  line-height: 48px;
  text-transform: uppercase;
  border-radius: 50%;
  background: #fff;
`;

const textStyles = css`
  background: -webkit-linear-gradient(left, #ff7178 , #ffab40);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const wrapperStyles = css`
  background: -webkit-linear-gradient(left, #ff7178 , #ffab40);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin: auto;
`;

const SmallAvatarWithName = ({ name = 'Apec Airlala' }: { name: string }) => (
  <div style={wrapperStyles}>
    <div style={abbreviationStyles}>
      <div style={textStyles}>
        {getAbbreviation(name)}
      </div>
    </div>
  </div>
);

export default SmallAvatarWithName;

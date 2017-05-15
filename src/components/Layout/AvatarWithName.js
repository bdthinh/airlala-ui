import React from 'react';
import css from 'css-template';

const getAbbreviation = str => str.match(/[A-Z|0-9]/g).join('');

const abbreviationStyles = css`
  width: 72px;
  height: 72px;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 1.5px;
  line-height: 72px;
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
  width: 76px;
  height: 76px;
  border-radius: 50%;
  margin: auto;
`;

const EclipseAvatarWithName = ({ name = 'Apec Airlala' }: { name: string }) => (
  <div style={wrapperStyles}>
    <div style={abbreviationStyles}>
      <div style={textStyles}>
        {getAbbreviation(name)}
      </div>
    </div>
  </div>
);

export default EclipseAvatarWithName;

import React from 'react';
import css from 'css-template';
import BackButton from './BackButton';
import CancelButton from './CancelButton';

export const COLORS = [
  '#ff4344',
  '#ff7178',
  '#ffab40',
  '#ffde12',
  '#31bf7a',
  '#1dbbee',
  '#1d7cee',
  '#a77dc2',
  '#564ba5',
  '#576aa1',
  '#b140a6',
  '#b1ee1d',
];

const logoStyles = css`
  font-size: 18px;
  font-weight: 500;
  background: -webkit-linear-gradient(left, #ff7178 , #ffab40);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1.5px;
  width: 100%;
  text-transform: uppercase;
`;

const wrapperStyles = css`
  padding-top: 18px;
  text-align: center;
  align-items: center;
  display: flex;
`;

type TopNavigationPropsType = {
  headerText: string,
  cancel: boolean,
  rightElement: Function,
};

const TopNavigation = ({
  headerText = 'Airlala',
  cancel,
  rightElement: RightElement,
}: TopNavigationPropsType) => (
  <div style={wrapperStyles}>
    {cancel ? <CancelButton /> : <BackButton />}
    <span style={logoStyles}>{headerText}</span>
    {RightElement && <RightElement />}
  </div>
);

export default TopNavigation;

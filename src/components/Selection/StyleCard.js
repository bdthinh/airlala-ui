import React from 'react';
import { connect } from 'react-redux';
import css from 'css-template';
import { Card } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import { lightBlue200, grey50 } from 'material-ui/styles/colors';
import { capitalize } from 'lodash/fp';

import {
  chooseTag,
  csTagsSelector,
} from './currentSelection.state';

const cardStyles = css`
  font-size: 14px;
  width: calc(100% - 12px);
  margin: 0 6px 12px;
  display: inline-block;
  text-align: center;
`;

const contentStyles = css`
  margin-top: 36px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  display: flex;
  flex-wrap: wrap;
`;

type StylesCardPropsType = {
  current: Array<string>,
  onChange: Function,
};

const TAGS = [
  'elegant',
  'alternative',
  'fun',
  'sporty',
  'luxurious',
  'conventional',
];

const enhance = connect(
  state => ({
    current: csTagsSelector(state),
  }),
  {
    onChange: tag => chooseTag(tag),
  },
);

const StylesCard = ({ current, onChange }: StylesCardPropsType) => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
      {TAGS.map(tag => (
        <Chip
          backgroundColor={current.indexOf(tag) !== -1 ? lightBlue200 : grey50}
          onTouchTap={() => onChange(tag)}
        >
          {capitalize(tag)}
        </Chip>
      ))}
    </div>
  </Card>
);

export default enhance(StylesCard);

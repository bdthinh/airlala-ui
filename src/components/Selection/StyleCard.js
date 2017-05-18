import React from 'react';
import { connect } from 'react-redux';
import css from 'css-template';
import { Card } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
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
  margin: 24px 12px;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
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

const headerStyle = css`
  text-transform: uppercase;
  color: #BDBDBD;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 1.1px;
  padding-bottom: 18px;
`;

const chipLabelStyles = css`
  margin: 4px 8px;
  background-color: transparent;
  border: 1px solid #E1E1E1;
`;

const currentChipLabelStyles = css`
  composes: ${chipLabelStyles},
  border: 1px solid #F57C00;
`;

const StylesCard = ({ current, onChange }: StylesCardPropsType) => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
      <div style={headerStyle}>
        Your Budget
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {TAGS.map(tag => (
          <Chip
            key={tag}
            onTouchTap={() => onChange(tag)}
            style={current.indexOf(tag) !== -1 ? currentChipLabelStyles : chipLabelStyles}
            labelStyle={{ fontWeight: '500' }}
          >
            {capitalize(tag)}
          </Chip>
        ))}
      </div>
    </div>
  </Card>
);

export default enhance(StylesCard);

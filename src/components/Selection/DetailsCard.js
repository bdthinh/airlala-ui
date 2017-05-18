import React from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import css from 'css-template';
import { connect } from 'react-redux';

import {
  setDetails,
  csDetailsSelector,
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
`;

type DetailsCardPropsType = {
  current: string,
  onChange: Function,
};

const enhance = connect(
  state => ({
    current: csDetailsSelector(state),
  }),
  {
    onChange: (event, value) => setDetails(value),
  }
);

const DetailsCard = ({
  current,
  onChange,
}: DetailsCardPropsType) => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
      <div>Details</div>
      <TextField
        name="details"
        hintText=""
        value={current}
        onChange={onChange}
        multiLine
        rows={4}
        rowsMax={6}
      />
    </div>
  </Card>
);

export default enhance(DetailsCard);

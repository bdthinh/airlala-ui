import React from 'react';
import { Card } from 'material-ui/Card';
import Emoticon from 'material-ui/svg-icons/editor/insert-emoticon';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';
import css from 'css-template';
import ScrollArea from 'react-scrollbar';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  changeReceiverName,
  changeAges,
  changeRelationship,
  csReceiverNameSelector,
  csAgesSelector,
  csRelationshipSelector,
} from './currentSelection.state';
import {
  showReceiverInput,
  hideRecieverInput,
  isShownReceiverSelectionSelector,
} from './selectStatus.state';

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

const AGE_RANGES = ['0,5', '6,10', '11,15', '15,18', '19,24', '25,34', '35,54', '55,64', '65,1111'];

const displayAge = (range) => {
  const min = range.split(',')[0];
  const max = range.split(',')[1];
  if (max === '1111') {
    return `${min} +`;
  }
  return `${min} - ${max}`;
};

const RELATIONSHIPS = [
  'Professional',
  'Friend',
  'Partner',
  'Mother',
  'Father',
  'Daughter',
  'Son',
  'Other',
];

const spanRangeStyles = css`
  margin: 0 6px;
  border: 1px solid red;
`;

const spanRangeCurrentStyles = css`
  composes: ${spanRangeStyles},
  background-color: blue;
`;

type RangeSelectionPropsType = {
  current: string,
  onChange: Function,
};

const AgeRangeSelection = ({ current, onChange }: RangeSelectionPropsType) => (
  <ScrollArea
    speed={0.8}
    stopScrollPropagation
    horizontal
  >
    {AGE_RANGES.map(range => (
      <span
        style={range === current ? spanRangeCurrentStyles : spanRangeStyles}
        key={range}
        onTouchTap={() => onChange(range)}
      >
        {displayAge(range)}
      </span>
    ))}
  </ScrollArea>
);

const RelationshipSelection = ({ current, onChange }: RangeSelectionPropsType) => (
  <ScrollArea
    speed={0.8}
    stopScrollPropagation
    horizontal
  >
    {RELATIONSHIPS.map(relationship => (
      <span
        style={relationship === current ? spanRangeCurrentStyles : spanRangeStyles}
        key={relationship}
        onTouchTap={() => onChange(relationship)}
      >
        {relationship}
      </span>
    ))}
  </ScrollArea>
);

type ReceiverCardPropsType = {
  onTouchTapAdd: Function,
  onTouchTapCancel: Function,
  onChangeReceiverName: Function,
  isShownReceiverSelection: boolean,
  onChangeAges: Function,
  onChangeRelationship: Function,
  ages: string,
  relationship: string,
};

const mapStateToProps = createStructuredSelector({
  receiverName: csReceiverNameSelector,
  ages: csAgesSelector,
  relationship: csRelationshipSelector,
  isShownReceiverSelection: isShownReceiverSelectionSelector,
});

const enhance = connect(
  mapStateToProps,
  {
    onTouchTapAdd: showReceiverInput,
    onTouchTapCancel: hideRecieverInput,
    onChangeReceiverName: (event, value) => changeReceiverName(value),
    onChangeAges: range => changeAges(range),
    onChangeRelationship: relationship => changeRelationship(relationship),
  }
);

const ReceiverCard = ({
  onTouchTapAdd,
  onTouchTapCancel,
  onChangeReceiverName,
  onChangeAges,
  onChangeRelationship,
  isShownReceiverSelection,
  ages,
  relationship,
}: ReceiverCardPropsType) => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
      <div>Give A Gift To</div>
      {
        !isShownReceiverSelection
        ? <IconButton onTouchTap={onTouchTapAdd}>
          <Emoticon />
        </IconButton>
        : <div>
          <div>
            To:&nbsp;
            <TextField name="receiverName" hintText="  whom" onChange={onChangeReceiverName} />
            <IconButton onTouchTap={onTouchTapCancel}>
              <ClearIcon />
            </IconButton>
          </div>
          <AgeRangeSelection current={ages} onChange={onChangeAges} />
          <RelationshipSelection current={relationship} onChange={onChangeRelationship} />
        </div>
      }
    </div>
  </Card>
);

export default enhance(ReceiverCard);

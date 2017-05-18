import React from 'react';
import { Card } from 'material-ui/Card';
import Emoticon from 'material-ui/svg-icons/editor/insert-emoticon';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import css from 'css-template';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { capitalize } from 'lodash/fp';
import Slider from 'react-slick';

import {
  changeReceiverName,
  changeSex,
  changeAges,
  changeRelationship,
  csReceiverNameSelector,
  csSexSelector,
  csAgesSelector,
  csRelationshipSelector,
} from './currentSelection.state';

import {
  showReceiverInput,
  hideRecieverInput,
  isShownReceiverSelectionSelector,
} from './selectStatus.state';

const sliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  draggable: true,
};

const ageRangesliderSettings = {
  ...sliderSettings,
  slidesToShow: 4,
  slidesToScroll: 3,
};

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

const SEX = ['female', 'male'];

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

const sliderWrapperStyle = css`
  margin: 12px 0;
`;

const SexRangeSelection = ({ current, onChange }: RangeSelectionPropsType) => (
  <div style={sliderWrapperStyle}>
    {SEX.map(sex => (
      <span
        style={sex === current ? spanRangeCurrentStyles : spanRangeStyles}
        key={sex}
        onTouchTap={() => onChange(sex)}
      >
        {capitalize(sex)}
      </span>
    ))}
  </div>
);

const AgeRangeSelection = ({ current, onChange }: RangeSelectionPropsType) => (
  <div style={sliderWrapperStyle}>
    <Slider {...ageRangesliderSettings}>
      {AGE_RANGES.map(range => (
        <span
          style={range === current ? spanRangeCurrentStyles : spanRangeStyles}
          key={range}
          onTouchTap={() => onChange(range)}
        >
          {displayAge(range)}
        </span>
      ))}
    </Slider>
  </div>
);

const RelationshipSelection = ({ current, onChange }: RangeSelectionPropsType) => (
  <div style={sliderWrapperStyle}>
    <Slider {...sliderSettings}>
      {RELATIONSHIPS.map(relationship => (
        <span
          style={relationship === current ? spanRangeCurrentStyles : spanRangeStyles}
          key={relationship}
          onTouchTap={() => onChange(relationship)}
        >
          {relationship}
        </span>
      ))}
    </Slider>
  </div>
);

type ReceiverCardPropsType = {
  onTouchTapAdd: Function,
  onTouchTapCancel: Function,
  onChangeReceiverName: Function,
  onChangeSex: Function,
  isShownReceiverSelection: boolean,
  onChangeAges: Function,
  onChangeRelationship: Function,
  receiverName: string,
  sex: string,
  ages: string,
  relationship: string,
};

const mapStateToProps = createStructuredSelector({
  receiverName: csReceiverNameSelector,
  sex: csSexSelector,
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
    onChangeSex: sex => changeSex(sex),
    onChangeAges: range => changeAges(range),
    onChangeRelationship: relationship => changeRelationship(relationship),
  }
);

const headerStyle = css`
  text-transform: uppercase;
  color: #BDBDBD;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 1.1px;
`;

const ReceiverCard = ({
  onTouchTapAdd,
  onTouchTapCancel,
  onChangeReceiverName,
  onChangeSex,
  onChangeAges,
  onChangeRelationship,
  isShownReceiverSelection,
  receiverName,
  sex,
  ages,
  relationship,
}: ReceiverCardPropsType) => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
      <div style={headerStyle} onTouchTap={onTouchTapCancel}>
        Give A Gift To
      </div>
      {
        !isShownReceiverSelection
        ? <IconButton onTouchTap={onTouchTapAdd}>
          <Emoticon />
        </IconButton>
        : <div>
          <div>
            <TextField
              name="receiverName"
              hintText="  whom"
              inputStyle={{ textAlign: 'center' }}
              onChange={onChangeReceiverName}
              value={receiverName}
            />

          </div>
          <SexRangeSelection current={sex} onChange={onChangeSex} />
          <AgeRangeSelection current={ages} onChange={onChangeAges} />
          <RelationshipSelection current={relationship} onChange={onChangeRelationship} />
        </div>
      }
    </div>
  </Card>
);

export default enhance(ReceiverCard);

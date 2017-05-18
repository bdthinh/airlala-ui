import React from 'react';
import { Card } from 'material-ui/Card';
import css from 'css-template';

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

const ConfirmedCard = () => (
  <Card style={cardStyles}>
    <div style={contentStyles}>
      <h2>We are on it.</h2>
      We&quot;ll send your request to local artisans and get contacting you as soon as possible.
      Meanwhile, chat with us should you have any questions.
    </div>
  </Card>
);

export default ConfirmedCard;

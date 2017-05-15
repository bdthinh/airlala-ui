import React from 'react';
import css from 'css-template';
import TopNavigation from '../Layout/TopNavigation';

const formWrapperStyles = css`
  padding: 12px 24px;
  position: relative;
  font-size: 14px;
  line-height: 24px;
`;

const TermsAndConditions = () => (
  <div>
    <TopNavigation headerText="Terms & Privacy" cancel />
    <div style={formWrapperStyles}>
      <p>
        In the world of ecommerce,
        when it comes to establishing consumer trust,
        the importance of <strong>website privacy</strong> can&quot;t be stressed enough,
        that is if becoming successful in business on the internet is something you are aiming for.
        If that is your desire as a company,
        you will want to have a privacy policy that protects you and those who do business with you.
      </p>
      <p>
        A good privacy policy will clarify exactly what information you collect and store and
        how the information will be used.
        It will state whether there will be third party distribution of that information as well as
        any choices consumers have in that regard.
        There should be a declaration as to your commitment to guarantee a visitors web privacy
        as wells as the steps that you are taking to uphold it.
      </p>
      <p>
        Without making it a priority in your business plan,
        you could be losing potential sales simply because visitors
        don&quot;t feel safe giving the information required to process a transaction.
        Don&quot;t let the lack of a web based privacy statement stop
        your business from finding true success.
      </p>
    </div>
  </div>
);

export default TermsAndConditions;

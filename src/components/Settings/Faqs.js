import React from 'react';
import css from 'css-template';
import TopNavigation from '../Layout/TopNavigation';

const formWrapperStyles = css`
  padding: 12px 24px;
  position: relative;
  font-size: 14px;
  line-height: 24px;
`;

const Faqs = () => (
  <div>
    <TopNavigation headerText="FAQ" cancel />
    <div style={formWrapperStyles}>
      <h3>What is Airlala ?</h3>
      <p>
        AirLala.com is a startup from Vietnam,
        with the founding team used to study and live in many countries:
        U.S, U.K, Chile, Singapore.
      </p>

      <h3>Airlala mission</h3>
      <p>
        Our mission is to leverage technology to deliver positive impacts in the society.
        We aim to empower SMEs and local artisans in emerging market through.
        <strong>our AI-powered marketplace</strong>
      </p>

      <h3>How It Works: For International Buyers</h3>
      <p>
        Users download the app then enter a bit of information about the what they are looking for:
        style, budget, types of products, budget, handmade or mass productions, quantities.
      </p>
      <p>
        AirLala then filters that information through
        its database of thousands of local artisans and SMEs.
      </p>
      <p>
        AirLala will release the recommendations about local products to buyers.
      </p>
      <p>
        Buyers can make the purchase directly from the app.
        AirLala can offer the shipping services to buyer&quot; addresss.
      </p>
      <h3>How It Works: For Local Artisans</h3>
      <p>
        Local artisans will download the app,
        and register to be a verified artisans on the platform.
      </p>
      <p>
        Artisans will input their products&quot; information to AirLala.
      </p>
      <p>
        AirLala will matchmake the products from local artisans to potential buyers
      </p>
      <p>
        After matching successfully,
        AirLala can help local artitisans to ship the products to potential buyers.
      </p>
      <h3>How Airlala makes money</h3>
      <p>
        Airlala takes commissions from SMEs and local artisans when a product is sold.
        Also we charge a percentage-based service fee to buyers who purchase local products
        on the platform.
      </p>
    </div>
  </div>
);

export default Faqs;

// CardList.js

import React from 'react';
import SubscriptionDetails from './SubscriptionDetails';
import BurnerDetails from './BurnerDetails';

const App = ({allcardholder}) => {
  const burnerData = {
    name: 'Mixmax',
    budgetName: 'Software subscription',
    ownerID: 1,
    spent: {
      value: 100,
      currency: 'SGD',
    },
    availableToSpend: {
      value: 1000,
      currency: 'SGD',
    },
    cardType: 'Subcription',
    expiry: '9 Feb',
    limit: 100,
    status: 'active',
  };
    const subscriptionData = {
      name: 'Quickbooks',
      budgetName: 'Software subscription',
      ownerID: 2,
      spent: {
        value: 50,
        currency: 'SGD',
      },
      availableToSpend: {
        value: 250,
        currency: 'SGD',
      },
      cardType: 'subscription',
      limit: 10,
      status: 'active',
    };

  


  return (
    <div>
      <SubscriptionDetails {...subscriptionData} />
      <BurnerDetails{...burnerData}/>
    </div>
  );
};

export default App;



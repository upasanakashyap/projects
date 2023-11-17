

import React from 'react';

const SubscriptionDetails = (props) => {
  const { name, budgetName, ownerID, spent, availableToSpend, cardType, limit, status } = props;

  return (
    <div className="Subcription">
      <h2>{name}</h2>
      <p>Budget Name: {budgetName}</p>
      <p>Owner ID: {ownerID}</p>
      <p>Spent: {spent.value} {spent.currency}</p>
      <p>Available to Spend: {availableToSpend.value} {availableToSpend.currency}</p>
      <p>Card Type: {cardType}</p>
      <p>Limit: {limit}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default SubscriptionDetails;

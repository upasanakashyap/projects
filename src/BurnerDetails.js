

import React from 'react';

const BurnerDetails = ({ name, budgetName, ownerID, spent, availableToSpend, cardType, expiry, limit, status }) => {
  return (
    <div>
      <h1>Burner Details</h1>
      <p>Name: {name}</p>
      <p>Budget Name: {budgetName}</p>
      <p>Owner ID: {ownerID}</p>
      <p>Spent: {spent.value} {spent.currency}</p>
      <p>Available to Spend: {availableToSpend.value} {availableToSpend.currency}</p>
      <p>Card Type: {cardType}</p>
      <p>Expiry: {expiry}</p>
      <p>Limit: {limit}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default BurnerDetails;

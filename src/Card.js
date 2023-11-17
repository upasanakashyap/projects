import React from 'react';
import CardList from './CardList'
const Card = ({ CardList }) => {
  return (
    <div>
      <div>{CardList.name}</div>
      <div>{CardList.budget_name}</div>
      {/* Display other card details based on the card type */}
      {CardList.cardType=== 'burner' ? (
        <div>Expiry: {CardList.expiry}</div>
      ) : (
        <div>Limit: {CardList.limit}</div>
      )}
      <div>Status: {CardList.status}</div>
    </div>
  );
};

export default Card;
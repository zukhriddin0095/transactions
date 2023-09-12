
import React from 'react'


import "./TransactionCard.scss"

const TransactionCard = ({id, week, transaction, summo}) => {
  return (
    <div className="row">
      <div className="box">
        <h3> id {id}</h3>
      <h3>Hafta kuni: {week}</h3>
      <h3>kunlik harajat: {transaction}</h3>
      <h3>summa: {summo}</h3>
      </div>
    </div>
  );
}

export default TransactionCard
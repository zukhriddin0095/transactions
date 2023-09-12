  import React from "react";

  import "./DeptCard.scss";

  export const transactionCard = ({ id, name, transaction, summa, editDebt }) => {
    return (
      <div className="card">
        <h3>
          Id: <span>{id}</span>
        </h3>
        <h3>
          name: <span>{name}</span>
        </h3>
        <h3>
          debt: <span>{transaction} $</span>
        </h3>
        <h3>
          phone: <span>+{summa}</span>
        </h3>
        <div className="control__btns">
          <button onClick={() => editDebt(id)} className="control__btn">
            edit
          </button>
          <button className="control__btn">delete</button>
        </div>
      </div>
    );
  };


  export default transactionCard;

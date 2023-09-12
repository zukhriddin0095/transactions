import React from "react";

import "./DeptCard.scss";

const DebtCard = ({ id, name, dept, phone, data, editDebt }) => {
  return (
    <div className="card">
      <h3>
        Id: <span>{id}</span>
      </h3>
      <h3>
        name: <span>{name}</span>
      </h3>
      <h3>
        debt: <span>{dept} $</span>
      </h3>
      <h3>
        phone: <span>+{phone}</span>
      </h3>
      <h3>
        time of borrowing: <span>{data}</span>
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
//  id: "0",
//       name: "joinPaths",
//       dept: 120,
//       phone: "998946584514",
//       data: "15-20-2022",

export default DebtCard;

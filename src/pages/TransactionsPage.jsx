import React, { Fragment, useState } from "react";


import transactionCard from "../components/card/transactionCard";

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./transaction.scss";



const Transactions = () => {

  const [transaction, settransaction] = useState([
    {
      id: "0",
      name: "joinPaths",
      transaction: 120,
      summa: "998946584514",
    },
    {
      id: "1",
      name: "karlsin",
      transaction: 1100,
      summa: "998946556445",
    },
    {
       id: "2",
      name: "berlin ",
      transaction: 180,
      summa: "998946588475",
    },
  ]);

  //  const submit = (e) => {

  //    const form = e.currentTarget;
  //    e.preventDefault();
  //    if (form.checkValidity()) {
  //      if (selected === null) {
  //        setdepts([...debts, { ...debt, debt: +debt.number, id: v4() }]);
  //      } else {
  //        let newDebts = debts.map((el) => {
  //          if (el.id === selected) {
  //            return debt;
  //          }
  //          return el;
  //        });
  //        setdepts(newDebts);
  //      }
  //      handleClose();
  //    }
  //  };


  return (
    <Fragment>
      <section className="Transactions">
        <div className="transaction__box">
          <h3 className="transaction__box__title">All Transactions</h3>
          <button
            className="btn-modal"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="fa-solid fa-user-plus"></i>
          </button>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Transactions
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <form className="form__mpdal">
                  <div className="col-12">
                    <label className="form-label">name</label>
                    <input type="text" id="name" placeholder="Name" />
                  </div>
                  <div className="col-12">
                    <label className="form-label"> kunlik haqajatat</label>
                    <input id="transaction" type="text" />
                  </div>
                  <div className="col-12">
                    <label id="summa" className="form-label">
                      summa
                    </label>
                    <input type="text" />
                  </div>
                  <button type="button" class="btn btn-primary mt-3">
                    Save changes
                  </button>
                </form>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {transaction.map((el) => (
          <transactionCard  {...el}/>
        ))}
      </section>
    </Fragment>
  );
};

export default Transactions;

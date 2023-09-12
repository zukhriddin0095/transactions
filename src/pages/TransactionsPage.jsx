import React, { Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./transaction.scss";

const Transactions = () => {
  return (
    <Fragment>
      <section className="Transactions">
        <div className="transaction__box">
          <h3 className="transaction__box__title">All DebtsPage</h3>
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
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Transactions;

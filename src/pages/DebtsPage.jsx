import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { v4 } from "uuid";

import DebtCard from "../components/card/DebtCard";

const Debts = () => {
  const [debts, setdepts] = useState([
    {
      id: "0",
      name: "joinPaths",
      dept: 120,
      phone: "998946584514",
      data: "15-20-2022",
    },
    {
      id: "1",
      name: "benjamen",
      dept: 200,
      phone: "998948954762",
      data: "08-01-2022",
    },
    {
      id: "2",
      name: "karlbanders",
      dept: 180,
      phone: "998948794514",
      data: "05-12-2022",
    },
  ]);

  const [debt, setDebt] = useState({ name: "", debt: "", phone: "" });

  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);

  const [selected, setSelected] = useState(null);

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setValidated(false);
  };
  const submit = (e) => {
    const form = e.currentTarget;
    setValidated(true);
    e.preventDefault();
    if (form.checkValidity()) {
      if (selected === null) {
        setdepts([...debts, { ...debt, debt: +debt.number, id: v4() }]);
      } else {
        let newDebts = debts.map((el) => {
          if (el.id === selected) {
            return debt;
          }
          return el;
        });
        setdepts(newDebts);
      }
      handleClose();
    }
  };
  const handleDebt = (e) => {
    setDebt({ ...debt, [e.target.id]: e.target.value });
  };
  const editDebt = (id) => {
    handleShow();
    setSelected(id);
    let debt = debts.find((el) => el.id === id);
    setDebt(debt);
  };

  const openDebtModal = () => {
    handleShow();
    setSelected(null);
    setDebt({ name: "", debt: "", phone: "" });
  };

  return (
    <section className="Debts">
      <div className="container">
        <div className="debt__box">
          <h3 className="debt__box__title">All DebtsPage</h3>
          <button className="btn-modal" onClick={openDebtModal}>
            ➕
          </button>
        </div>
        <div className="cards">
          {debts.map((debt) => (
            <DebtCard editDebt={editDebt} key={debt.id} {...debt} />
          ))}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={submit}>
          <Modal.Header closeButton>
            <Modal.Title>Debt data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleDebt}
                value={debt.name}
                required
                type="text"
                placeholder="Full name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please fill!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={handleDebt}
                value={debt.phone}
                required
                type="text"
                placeholder="999400807"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please fill!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="debt">
              <Form.Label>Debt $</Form.Label>
              <Form.Control
                onChange={handleDebt}
                value={debt.debt}
                required
                type="number"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please fill!
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {selected === null ? "Add" : "Save"} debt
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </section>
  );
};

export default Debts;

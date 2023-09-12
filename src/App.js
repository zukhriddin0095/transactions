import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";
import Debts from "./pages/DebtsPage";
import Transactions from "./pages/TransactionsPage";
import Home from "./pages/HomePage";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Debts" element={<Debts />} />
          <Route path="/Transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Expenses from "./pages/Expenses.jsx";
import ScanReceipt from "./pages/ScanReceipt.jsx";
import AddExpense from "./pages/AddExpense.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Budgets from "./pages/Budgets.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" replace />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="/ScanReceipt" element={<ScanReceipt />} />
        <Route path="/AddExpense" element={<AddExpense />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Budgets" element={<Budgets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

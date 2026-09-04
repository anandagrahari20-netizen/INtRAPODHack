import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Expenses from "./pages/Expenses.jsx";
import ScanReceipt from "./pages/ScanReceipt.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" replace />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="/ScanReceipt" element={<ScanReceipt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

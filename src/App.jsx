import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Expenses from "./pages/Expenses.jsx";
import ScanReceipt from "./pages/ScanReceipt.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Expenses" replace />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="/ScanReceipt" element={<ScanReceipt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

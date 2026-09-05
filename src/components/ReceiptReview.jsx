import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExpenses } from "../context/ExpenseContext.jsx";

function ReceiptReview() {
  const navigate = useNavigate();
  const { addExpense } = useExpenses();
  const [merchant, setMerchant] = useState("Starbucks");
  const [date, setDate] = useState("2026-09-04");
  const [category, setCategory] = useState("Food");
  const [total, setTotal] = useState("450");

  const handleSave = async () => {
    await addExpense({
      payee: merchant,
      category,
      amount: total,
      date,
      note: "Imported from receipt scan",
      instrument: "Card",
      channel: "Receipt",
      documentation: "Attached",
    });

    navigate("/Expenses");
  };

  return (
    <div className="mt-6 w-full rounded-2xl border border-[#e8ddd6] bg-white p-5">

      <h2 className="font-serif text-2xl text-[#241c18]">
        Review Receipt
      </h2>

      <p className="mt-1 text-sm text-[#766a63]">
        Check the details before saving.
      </p>

      {/* Merchant */}
      <div className="mt-5">
        <label className="text-sm font-medium text-[#4a3325]">
          Merchant
        </label>

        <input
          type="text"
          value={merchant}
          onChange={(e) => setMerchant(e.target.value)}
          className="mt-2 w-full rounded-lg border border-[#e8ddd6] p-3 outline-none"
        />
      </div>

      {/* Date */}
      <div className="mt-4">
        <label className="text-sm font-medium text-[#4a3325]">
          Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-2 w-full rounded-lg border border-[#e8ddd6] p-3 outline-none"
        />
      </div>

      {/* Category */}
      <div className="mt-4">
        <label className="text-sm font-medium text-[#4a3325]">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-2 w-full rounded-lg border border-[#e8ddd6] bg-white p-3 outline-none"
        >
          <option>Food</option>
          <option>Shopping</option>
          <option>Travel</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>
      </div>

      {/* Total */}
      <div className="mt-4">
        <label className="text-sm font-medium text-[#4a3325]">
          Total
        </label>

        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="mt-2 w-full rounded-lg border border-[#e8ddd6] p-3 outline-none"
        />
      </div>

      {/* Save */}
      <button
        type="button"
        onClick={handleSave}
        className="mt-6 w-full rounded-lg bg-[#8b6845] py-3 font-medium text-white hover:bg-[#755638]"
      >
        Save Expense
      </button>

    </div>
  );
}

export default ReceiptReview;
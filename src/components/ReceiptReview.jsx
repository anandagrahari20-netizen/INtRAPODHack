import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useExpenses } from "../context/ExpenseContext.jsx";
import { Loader } from "lucide-react";

function ReceiptReview({ file }) {
  const navigate = useNavigate();
  const { addExpense } = useExpenses();
  const [merchant, setMerchant] = useState("Starbucks");
  const [date, setDate] = useState("2026-09-04");
  const [category, setCategory] = useState("Food");
  const [total, setTotal] = useState("450");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ocrText, setOcrText] = useState("");

  useEffect(() => {
    if (file) {
      processReceipt();
    }
  }, [file]);

  const processReceipt = async () => {
    setLoading(true);
    setError(null);
    setOcrText("");

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("http://localhost:3001/api/ocr", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process receipt");
      }

      const data = await response.json();
      const extractedText = data.text || "";
      setOcrText(extractedText);

      parseReceiptData(extractedText);
    } catch (err) {
      setError(err.message || "Failed to process receipt");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const parseReceiptData = (text) => {
    const lines = text.split("\n").filter((line) => line.trim());

    // Extract total amount by looking for lines containing "Total", "TOTAL", "Amount", etc.
    let totalAmount = "0.00";
    for (const line of lines) {
      if (/^(total|amount|subtotal|grand total|final|price)/i.test(line.trim())) {
        const amountMatch = line.match(/[\d,]+\.?\d*/);
        if (amountMatch) {
          totalAmount = amountMatch[0].replace(/,/g, "");
          break;
        }
      }
    }

    // Extract date - look for patterns like dd/mm/yyyy or dd-mm-yyyy
    let parsedDate = new Date().toISOString().split("T")[0];
    const dateRegex = /(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})/;
    const dateMatch = text.match(dateRegex);
    if (dateMatch) {
      const [, day, month, year] = dateMatch;
      parsedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }

    // Extract merchant from first non-empty line or look for keywords
    let merchant = "Unknown Merchant";
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.length > 3 && !/^(date|time|bill|invoice|gstin|phone)/i.test(trimmed)) {
        merchant = trimmed;
        break;
      }
    }

    setMerchant(merchant);
    setDate(parsedDate);
    setTotal(totalAmount);
  };

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

  if (!file) {
    return null;
  }

  return (
    <div className="mt-6 w-full rounded-2xl border border-[#e8ddd6] bg-white p-5">

      <h2 className="font-serif text-2xl text-[#241c18]">
        Review Receipt
      </h2>

      <p className="mt-1 text-sm text-[#766a63]">
        Check the details before saving.
      </p>

      {loading && (
        <div className="mt-6 flex flex-col items-center justify-center py-8">
          <Loader className="h-8 w-8 animate-spin text-[#b8a592]" />
          <p className="mt-3 text-sm text-[#766a63]">Processing receipt...</p>
        </div>
      )}

      {error && (
        <div className="mt-4 rounded-lg bg-red-50 p-4">
          <p className="text-sm text-red-700">Error: {error}</p>
          <button
            onClick={processReceipt}
            className="mt-3 rounded-lg bg-red-100 px-3 py-1 text-xs text-red-700 hover:bg-red-200"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
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

          {ocrText && (
            <details className="mt-4">
              <summary className="cursor-pointer text-xs font-medium text-[#766a63]">
                View Extracted Text
              </summary>
              <div className="mt-3 max-h-64 overflow-y-auto rounded-lg bg-[#fffaf7] p-3">
                <pre className="whitespace-pre-wrap text-xs text-[#4a3325]">
                  {ocrText}
                </pre>
              </div>
            </details>
          )}

          {/* Save */}
          <button
            type="button"
            onClick={handleSave}
            className="mt-6 w-full rounded-lg bg-[#8b6845] py-3 font-medium text-white hover:bg-[#755638]"
          >
            Save Expense
          </button>
        </>
      )}

    </div>
  );
}

export default ReceiptReview;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExpenses } from "../context/ExpenseContext.jsx";

const initialForm = {
	payee: "",
	category: "Food & Dining",
	amount: "",
	date: new Date().toISOString().slice(0, 10),
	note: "",
	instrument: "Card",
	channel: "Manual",
};

const categories = [
	"Food & Dining",
	"Shopping",
	"Groceries",
	"Transport",
	"Entertainment",
	"Other",
];

function AddExpense() {
	const navigate = useNavigate();
	const { addExpense } = useExpenses();
	const [form, setForm] = useState(initialForm);
	const [saving, setSaving] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((current) => ({ ...current, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setSaving(true);

		try {
			await addExpense(form);
			setForm(initialForm);
			navigate("/Expenses");
		} finally {
			setSaving(false);
		}
	};

	return (
		<main className="min-h-screen bg-[#fffaf7] px-4 py-8">
			<section className="mx-auto max-w-3xl rounded-2xl border border-[#e8ddd6] bg-white p-6 shadow-[0_1px_2px_rgba(42,32,24,0.04),0_8px_24px_-12px_rgba(42,32,24,0.12)]">
				<h1 className="font-serif text-3xl font-semibold text-[#241c18]">
					Add Expense
				</h1>
				<p className="mt-2 text-sm text-[#766a63]">
					Save a new expense and update the dashboard, ledger, and recent activity.
				</p>

				<form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
					<div>
						<label className="text-sm font-medium text-[#4a3325]">Merchant</label>
						<input
							name="payee"
							type="text"
							value={form.payee}
							onChange={handleChange}
							className="mt-2 w-full rounded-lg border border-[#e8ddd6] p-3 outline-none"
							placeholder="e.g. Starbucks"
							required
						/>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						<div>
							<label className="text-sm font-medium text-[#4a3325]">Category</label>
							<select
								name="category"
								value={form.category}
								onChange={handleChange}
								className="mt-2 w-full rounded-lg border border-[#e8ddd6] bg-white p-3 outline-none"
							>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className="text-sm font-medium text-[#4a3325]">Amount</label>
							<input
								name="amount"
								type="number"
								min="0"
								value={form.amount}
								onChange={handleChange}
								className="mt-2 w-full rounded-lg border border-[#e8ddd6] p-3 outline-none"
								placeholder="450"
								required
							/>
						</div>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						<div>
							<label className="text-sm font-medium text-[#4a3325]">Date</label>
							<input
								name="date"
								type="date"
								value={form.date}
								onChange={handleChange}
								className="mt-2 w-full rounded-lg border border-[#e8ddd6] p-3 outline-none"
								required
							/>
						</div>

						<div>
							<label className="text-sm font-medium text-[#4a3325]">Payment Method</label>
							<input
								name="instrument"
								type="text"
								value={form.instrument}
								onChange={handleChange}
								className="mt-2 w-full rounded-lg border border-[#e8ddd6] p-3 outline-none"
								placeholder="Card, UPI, Cash"
							/>
						</div>
					</div>

					<div>
						<label className="text-sm font-medium text-[#4a3325]">Note</label>
						<textarea
							name="note"
							value={form.note}
							onChange={handleChange}
							className="mt-2 min-h-28 w-full rounded-lg border border-[#e8ddd6] p-3 outline-none"
							placeholder="What was this expense for?"
						/>
					</div>

					<button
						type="submit"
						disabled={saving}
						className="mt-2 rounded-lg bg-[#8b6845] py-3 font-medium text-white hover:bg-[#755638] disabled:cursor-not-allowed disabled:opacity-70"
					>
						{saving ? "Saving..." : "Save Expense"}
					</button>
				</form>
			</section>
		</main>
	);
}

export default AddExpense;

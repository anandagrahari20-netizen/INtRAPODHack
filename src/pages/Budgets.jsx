import CategoryBudgets from "../components/CategoryBudgets.jsx";

function Budgets() {
	return (
		<main className="min-h-screen bg-cream px-6 py-10">
			<div className="mx-auto max-w-4xl space-y-6">
				<header>
					<h1 className="font-serif text-4xl font-semibold text-ink">Budgets</h1>
					<p className="mt-2 text-sm text-muted">
						Track where your monthly spend is going.
					</p>
				</header>
				<CategoryBudgets />
			</div>
		</main>
	);
}

export default Budgets;

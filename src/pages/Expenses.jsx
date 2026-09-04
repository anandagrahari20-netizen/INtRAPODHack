import JournalHeader from "../components/JournalHeader.jsx";
import ExpenseCard from "../components/ExpenseCard.jsx";
import FilterBar from "../components/FilterBar.jsx";
import ExpenseTable from "../components/ExpenseTable.jsx";
import AuditorBalance from "../components/AuditorBalance.jsx";

const Expenses = () => {
  return (
    <main className="min-h-screen bg-cream font-sans py-10">
      <div className="mx-auto max-w-7xl space-y-6 px-6">
        <JournalHeader />
        <ExpenseCard />
        <FilterBar />
        <ExpenseTable />
        <AuditorBalance />
      </div>
    </main>
  );
};

export default Expenses;

import JournalHeader from "../components/JournalHeader.jsx";
import ExpenseCard from "../components/ExpenseCard.jsx";
import ExpenseTable from "../components/ExpenseTable.jsx";

const Expenses = () => {
  return (
    <main className="min-h-screen bg-cream py-10 font-sans">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <JournalHeader />
        <ExpenseCard />
        <ExpenseTable />
      </div>
    </main>
  );
};

export default Expenses;

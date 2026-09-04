import { motion } from "motion/react";
import JournalHeader from "../components/JournalHeader.jsx";
import ExpenseCard from "../components/ExpenseCard.jsx";
import FilterBar from "../components/FilterBar.jsx";
import ExpenseTable from "../components/ExpenseTable.jsx";
import AuditorBalance from "../components/AuditorBalance.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Expenses = () => {
  return (
    <main className="min-h-screen bg-cream font-sans py-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl space-y-6 px-6"
      >
        <motion.div variants={item}>
          <JournalHeader />
        </motion.div>
        <motion.div variants={item}>
          <ExpenseCard />
        </motion.div>
        <motion.div variants={item}>
          <FilterBar />
        </motion.div>
        <motion.div variants={item}>
          <ExpenseTable />
        </motion.div>
        <motion.div variants={item}>
          <AuditorBalance />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Expenses;

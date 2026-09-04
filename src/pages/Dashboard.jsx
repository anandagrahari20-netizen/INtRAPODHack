import { motion } from "motion/react";
import DashboardHeader from "../components/DashboardHeader.jsx";
import QuickActions from "../components/QuickActions.jsx";
import DashboardStats from "../components/DashboardStats.jsx";
import WeeklySpending from "../components/WeeklySpending.jsx";
import RecentTransactions from "../components/RecentTransactions.jsx";
import CategoryBudgets from "../components/CategoryBudgets.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-cream font-sans py-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl space-y-6 px-6"
      >
        <motion.div variants={item}>
          <DashboardHeader />
        </motion.div>
        <motion.div variants={item}>
          <DashboardStats />
        </motion.div>
        <motion.div variants={item}>
          <QuickActions />
        </motion.div>
        <motion.div
          variants={item}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          <div className="space-y-6 lg:col-span-2">
            <WeeklySpending />
            <RecentTransactions />
          </div>
          <div className="lg:col-span-1">
            <CategoryBudgets />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Dashboard;

import "./App.css";
import { Wallet } from "lucide-react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import useExpenses from "./hooks/useExpenses";
import Filters from "./components/Filters";
import Summary from "./components/Summary";
import useFilter from "./hooks/useFilters";

const App = () => {
  const { expenses, addExpense, deleteExpense, totalAmount, clearAllExpenses } =
    useExpenses();

  const filters = useFilter(expenses);


  return (
    <div className="App max-w-full text-slate-100 font-sans min-h-screen relative overflow-x-hidden selection:text-white">
      <header className="header py-5 px-12 rounded-b-2xl">
        <h1 className="glass-cards text-3xl font-semibold flex gap-3 ">
          <span>
            <Wallet size={34} strokeWidth={2} className=" text-amber-500/90" />
          </span>
          Personal Expense Tracker
        </h1>
        <p className="text-gray-100/70 mt-2">
          Multi-state synchronized ledger powered by reactive persistence &
          custom hooks.
        </p>
      </header>

      <main className="mx-auto my-2 flex w-full flex-col gap-6 rounded-xl px-4 sm:max-w-150 lg:max-w-none lg:flex-row lg:items-start lg:px-6">
        <div className="w-full lg:w-[35%] main-expense mt-3">
          <ExpenseForm addExpense={addExpense} />
        </div>

        <div className="w-full lg:w-[65%] main-expense">
          <Filters expenses={expenses} {...filters} />
          <ExpenseList
            expenses={filters.filteredExpenses}
            deleteExpense={deleteExpense}
          />
          <Summary
            totalAmount={totalAmount}
            clearAllExpenses={clearAllExpenses}
            expenses={expenses}
          />
        </div>
      </main>
    </div>
  );
};

export default App;

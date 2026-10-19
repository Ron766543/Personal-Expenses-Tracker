import { Plus, PencilSparkles, CalendarDays } from "lucide-react";
import addTaskIcon from "../assets/add_task.svg";
import { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("food");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const categories = [
    "food",
    "transport",
    "entertainment",
    "bills",
    "shopping",
    "others",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericAmount = Number(amount);

    if (
      !description.trim() ||
      !amount ||
      !Number.isFinite(numericAmount) ||
      numericAmount <= 0
    ) {
      alert("Please enter a description and an amount greater than zero.");
      return;
    }

    addExpense({
      description: description.trim(),
      category,
      amount: numericAmount,
      date: date || new Date().toLocaleDateString("en-CA"),
    });

    setDescription("");
    setCategory("food");
    setAmount("");
    setDate("");
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FF2E93]/20 text-pink-400/50 border border-[#FF2E93]/50 flex items-center justify-center shadow-[0_0_12px_rgba(255,46,147,0.3)]">
            <span className="material-symbols-outlined text-[18px]">
              <Plus />
            </span>
          </div>
          <div>
            <h2 className="text-lg font-display text-[#FF2E93]/80 font-semibold tracking-tight">
              Add New Expense
            </h2>
          </div>
        </div>
        <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-white/15 text-[#FF8A00]/90 border border-white/10">
          Quick Entry
        </span>
      </div>
      <form className="flex flex-col gap-5 mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1.5 mt-1">
          <label className="text-xs font-mono uppercase text-slate-300 flex justify-between tracking-wide">
            <span>
              Description <span className="text-[#FF2E93] font-bold">*</span>
            </span>
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4.5 top-4 text-blue-400/90 text-[18px]">
              <PencilSparkles size={14} strokeWidth={2} />
            </span>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full lowercase bg-[#101428] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-500 transition-all shadow-inner shadow-[#64748b]/30"
              placeholder=" what did you spend on?"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 mt-1">
          <label className="text-xs font-mono uppercase text-slate-300 tracking-wide">
            Category <span className="text-[#FF2E93] font-bold">*</span>
          </label>
          <select
            name="category"
            id="cate"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[#101428] border border-white/10 rounded-md pl-4 pr-16 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-500 transition-all shadow-inner shadow-[#64748b]/30"
          >
            {categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5 mt-1">
          <label className="text-xs font-mono uppercase text-slate-300 flex justify-between tracking-wide">
            <span>
              Amount <span className="text-[#FF2E93] font-bold">*</span>
            </span>
            <span className="text-[#FF8A00]/80 shadow-2xl  font-mono font-semibold">
              USD ($)
            </span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-2.5 text-lg font-mono font-bold text-[#FF8A00]/90">
              $
            </span>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full scheme-dark bg-[#101428] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-lg font-mono font-bold text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-500 transition-all shadow-inner shadow-[#64748b]/30"
              placeholder="0.00"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 mt-1">
          <label className="text-xs font-mono uppercase text-slate-300 tracking-wide">
            Date
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-3 text-slate-400 text-[18px]">
              <CalendarDays size={20} strokeWidth={2} />
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full scheme-dark bg-[#101428] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-500 transition-all shadow-inner shadow-[#64748b]/30"
            />
          </div>
        </div>
        <button
          type="submit"
          className="submit-btn relative mt-2 w-full py-3.5 px-6 rounded-xl text-white font-semibold text-sm  uppercase flex items-center justify-center gap-2 cursor-pointer transition-all hover:brightness-130 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FF2E93] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101428] shadow-xl shadow-[#FF2E93]/30"
        >
          <span className="material-symbols-outlined text-[20px] relative z-10">
            <img
              src={addTaskIcon}
              alt=""
              aria-hidden="true"
              className="h-5 w-6"
            />
          </span>
          <span className="relative z-10">Add Expense to Ledger</span>
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;

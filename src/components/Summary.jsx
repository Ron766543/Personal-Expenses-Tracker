import React from "react";
import { Trash } from "lucide-react";

function Summary({ clearAllExpenses, totalAmount, expenses }) {
  const categories = [
    { name: "Entertainment", label: "Ent", color: "#FF2E93" },
    { name: "Shopping", label: "Shop", color: "#00F2FE" },
    { name: "Food", label: "Food", color: "#FF9F1C" },
    { name: "Transport", label: "Trans", color: "#10B981" },
    { name: "Bills", label: "Bills", color: "#9D4EDD" },
    { name: "Others", label: "others", color: "#FF8A00" },
  ];

  const categoryShare = categories.map((category) => {
    const categoryTotal = expenses
      .filter(
        (expense) =>
          expense.category?.toLowerCase() === category.name.toLowerCase(),
      )
      .reduce((sum, expense) => sum + Number(expense.amount), 0);

    const percentage =
      totalAmount > 0 ? (categoryTotal / totalAmount) * 100 : 0;

    return {
      ...category,
      amount: categoryTotal,
      percentage,
    };
  });

  const topCategory = categoryShare.reduce(
    (top, category) => (category.amount > top.amount ? category : top),
    { label: "None", amount: 0 },
  );

  return (
    <div className="gls-c mt-5 rounded-2xl p-6 sm:p-7 relative overflow-hidden border border-white/10 shadow-2xl">
      <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#FF2E93]/15 blur-[90px] pointer-events-none"></div>
      <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full bg-[#FF8A00]/10 blur-[80px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Total Expenses
            </span>

            <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-[#FF2E93]/15 text-pink-300 border border-[#FF2E93]/30 shadow-[0_0_10px_rgba(255,46,147,0.25)]">
              CheckOut here
            </span>
          </div>

          <div className="text-4xl sm:text-5xl text-slate-400 font-mono font-extrabold tracking-tight">
            ${Number(totalAmount).toFixed(2)}
          </div>

          <p className="text-xs text-slate-400 mt-1 font-mono">
            Calculated across {expenses.length} active entries in categoryShare
          </p>
        </div>

        <div className="bg-[#101428]/90 p-4 rounded-xl border border-white/10 flex flex-col gap-2 min-w-60 shadow-lg">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono">Category Share</span>

            <span className="text-pink-300 font-mono font-semibold">
              Top: {topCategory.amount > 0 ? topCategory.label : "None"}
            </span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-[#080B16] overflow-hidden flex gap-0.5 p-0.5 border border-white/10">
            {categoryShare.map((category) => (
              <div
                key={category.name}
                className="h-full"
                title={`${category.name}: ${category.percentage.toFixed(1)}%`}
                style={{
                  width: `${category.percentage}%`,
                  backgroundColor: category.color,
                  boxShadow: `0 0 8px ${category.color}`,
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono text-slate-300 pt-1">
            {categoryShare.map((category) => (
              <div key={category.name} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: category.color }}
                />
                {category.label}: {category.percentage.toFixed(0)}%
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 relative z-10">
        <span className="text-slate-500 font-mono">
          Assignment 5: Personal Expenses Tracker
        </span>

        <button
          className="flex items-center gap-1.5 text-pink-400 hover:text-[#FF2E93] transition-colors"
          onClick={clearAllExpenses}
        >
          <Trash size={14} strokeWidth={2.25} />
          <span>Clear All</span>
        </button>
      </div>
    </div>
  );
}

export default Summary;

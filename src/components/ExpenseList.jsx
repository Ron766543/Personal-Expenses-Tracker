import { Trash } from "lucide-react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E93] shadow-[0_0_8px_#FF2E93]"></span>
          Expense History &amp; Audit Stream
        </span>
        <span className="text-[11px] font-mono text-slate-500">
          Live Component State {expenses.length}
        </span>
      </div>

      <div className="mt-5">
        {expenses.length === 0 ? (
          <div className="gls-c rounded-xl p-4 text-sm text-slate-300">
            No expenses added yet.
          </div>
        ) : (
          expenses.map((expense) => (
            <div key={expense.id} className="mb-3 flex flex-col gap-3">
              <div className="gls-c gls-c-h rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 border border-white/10">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-sm font-semibold ml-1 capitalize tracking-widest text-white truncate">
                      {expense.description}
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] tracking-wider font-mono border font-medium bg-[#FF9F1C]/15 text-[#FF9F1C] border-[#FF9F1C]/30">
                        {expense.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {expense.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 shrink-0">
                  <span className="text-base sm:text-lg font-mono font-bold text-white tracking-tight">
                    ${Number(expense.amount).toFixed(2)}
                  </span>
                  <button
                    type="button"
                    title="Delete expense"
                    onClick={() => deleteExpense(expense.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-[#FF2E93] hover:bg-white/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      <Trash size={16} strokeWidth={2} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExpenseList;

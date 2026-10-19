import React, { useState } from "react";
import { ListFilter, Search, RotateCcw } from "lucide-react";

const Filters = ({
  expenses,
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  sortBy,
  setSortBy,
  resetFilters,
}) => {
  const categories = [
    "All",
    "food",
    "transport",
    "entertainment",
    "bills",
    "shopping",
    "other",
  ];

  const sort = ["newest", "oldest", "highest", "lowest"];
  return (
    <div className="gls-c mt-3 mb-9 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 border border-white/10 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#FF8A00] text-[18px]">
            <ListFilter size={32} strokeWidth={2.25} />
          </span>
          <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
            Filter &amp; Search Expenses
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF8A00] shadow-[0_0_8px_#FF8A00]"></span>
          <span className="text-xs font-mono text-slate-400">
            Showing {searchTerm.length} of {expenses.length} expenses
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        <div className="sm:col-span-6 relative">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[18px]">
            <Search size={16} strokeWidth={2} />
          </span>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#101428] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF2E93] transition-all shadow-inner"
            placeholder="Search description..."
          />
        </div>
        <div className="sm:col-span-6">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-[#101428] border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#FF2E93] cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Start Date:</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-32 scheme-dark  bg-[#101428] border border-white/10 rounded-lg px-2.5 py-1 text-sm font-mono text-slate-400 focus:outline-none focus:border-[#FF8A00] shadow-inner"
            placeholder="yy-mm-dd"
          />
          <span className="text-slate-500 font-mono">-</span>
          <span className="text-xs font-mono text-slate-400">End Date:</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-32 scheme-dark  bg-[#101428] border border-white/10 rounded-lg px-2.5 py-1 text-sm font-mono text-slate-400 focus:outline-none focus:border-[#FF8A00] shadow-inner"
            placeholder="yy-mm-dd"
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#101428] border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-[#FF2E93] cursor-pointer"
          >
            {sort.map((opt) => (
              <option key={opt} value={opt.toLowerCase()}>
                Sort: {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </option>
            ))}
          </select>
          <button
            onClick={resetFilters}
            className="p-1 mt-1.5 rounded-lg bg-[#101428] border border-white/10 text-slate-400 hover:text-[#FF2E93] hover:border-[#FF2E93]/50 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">
              <RotateCcw size={13} strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;

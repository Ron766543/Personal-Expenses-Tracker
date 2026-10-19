
import { useState, useMemo } from "react";

const useFilter = (expenses = []) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    const filteredExpenses = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();

        let result = expenses.filter((expense) => {
            const description = String(
                expense.description || ""
            ).toLowerCase();

            const expenseCategory = String(
                expense.category || ""
            ).toLowerCase();

            const matchesSearch =
                description.includes(query) ||
                expenseCategory.includes(query);

            const matchesCategory =
                category === "all" ||
                expenseCategory === category.toLowerCase();

            return matchesSearch && matchesCategory;
        });

        if (startDate) {
            result = result.filter(
                (expense) => expense.date >= startDate
            );
        }


        if (endDate) {
            result = result.filter(
                (expense) => expense.date <= endDate
            );
        }


        result = [...result].sort((a, b) => {
            switch (sortBy) {
                case "highest":
                    return Number(b.amount) - Number(a.amount);

                case "lowest":
                    return Number(a.amount) - Number(b.amount);

                case "newest":
                    return String(b.date || "").localeCompare(
                        String(a.date || "")
                    );

                case "oldest":
                    return String(a.date || "").localeCompare(
                        String(b.date || "")
                    );

                default:
                    return 0;
            }
        });

        return result;
    }, [
        expenses,
        searchTerm,
        category,
        startDate,
        endDate,
        sortBy,
    ]);

    // Reset
    const resetFilters = () => {
        setSearchTerm("");
        setCategory("all");
        setStartDate("");
        setEndDate("");
        setSortBy("newest");
    };

    return {
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
        filteredExpenses,
        resetFilters,
    };
};

export default useFilter;

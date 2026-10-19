
import { useMemo } from "react";
import useLocalStorage from "./useLocalStorage";

const useExpenses = () => {
    const [expenses, setExpenses] = useLocalStorage(
        "expenses",
        []
    );

    const addExpense = (expenseData) => {
        const newExpense = {
            id: Date.now(),
            ...expenseData,
            amount: Number(expenseData.amount),
        };

        setExpenses((prevExpenses) => [
            newExpense,
            ...prevExpenses,
        ]);
    };

    const deleteExpense = (id) => {
        setExpenses((prevExpenses) =>
            prevExpenses.filter((expense) => expense.id !== id)
        );
    };

    const totalAmount = useMemo(() => {
        return expenses.reduce(
            (sum, expense) => sum + Number(expense.amount || 0),
            0
        );
    }, [expenses]);

    const clearAllExpenses = () => {
        setExpenses([]);
    };

    return {
        expenses,
        addExpense,
        deleteExpense,
        totalAmount,
        clearAllExpenses,
    };
};

export default useExpenses;

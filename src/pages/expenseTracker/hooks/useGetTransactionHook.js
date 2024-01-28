import React, { useEffect, useState } from 'react';
import { useUserInfoHook } from './useUserInfoHook';
import { db } from '../../../config/firebase-config';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';

const useGetTransactionHook = () => {

    const [transactions, setTransactions] = useState([]);
    const [balanceAmount, setBalanceAmount] = useState(0);
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [incomeAmount, setIncomeAmount] = useState(0);
    const { userId } = useUserInfoHook();
    const transactionCollection = collection(db, "Transactions");

    useEffect(() => {
        getTransactions();
    }, []);

    const getTransactions = async () => {
        let unsubscribe;
        try {
            let queryTransactions = query(transactionCollection, where("userId", "==", userId), orderBy("createdAt"));
            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                let docs = [],
                    totalIncome = 0,
                    totalExpense = 0,
                    totalBalance = 0;

                snapshot.forEach((doc) => {
                    let data = doc.data();
                    let id = doc.id;
                    docs.push({ ...data, id })

                    if (data.transactionType === "expense") {
                        totalExpense += Number(data.transactionAmount);
                    }
                    if (data.transactionType === "income") {
                        totalIncome += Number(data.transactionAmount);
                    }
                })

                console.log(totalBalance, totalExpense, totalIncome);
                totalBalance = totalIncome - totalExpense;
                setTransactions(docs);
                setBalanceAmount(totalBalance);
                setIncomeAmount(totalIncome);
                setExpenseAmount(totalExpense);
            });


        }
        catch (e) {
            console.log(e);
        }

        return () => unsubscribe();
    }



    return {
        balanceAmount,
        expenseAmount,
        incomeAmount,
        transactions
    }
}

export default useGetTransactionHook
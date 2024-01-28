import { addDoc, collection, serverTimestamp, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../../config/firebase-config';
import { useUserInfoHook } from './useUserInfoHook';

const useExpenseTrackerHook = () => {

    const transactionCollection = collection(db, "Transactions");
    const { userId } = useUserInfoHook();

    const handleAddTransaction = async ({ description, transactionAmount, transactionType }) => {
        await addDoc(transactionCollection, {
            userId: userId,
            description: description,
            transactionAmount: transactionAmount,
            transactionType: transactionType,
            createdAt: serverTimestamp()
        });
    }

    return {
        handleAddTransaction
    }
}

export default useExpenseTrackerHook
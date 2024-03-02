import React from 'react'

const TransactionList = ({ transactions }) => {
    return (
        <>{
            transactions.map(item =>
                <><div>{item.description} <p style={{ color: item.transactionType === "expense" ? "red" : "green", fontWeight: 'lighter' }} > {item.transactionAmount} INR </p></div>
               
            </>
                
            )
        }</>
            
        

    )
}

export default TransactionList;
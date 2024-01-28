import React from 'react'

const TransactionList = ({ transactions }) => {
    return (
        <ul>
            {
                transactions.map(item =>
                    <li ><h4>{item.description}</h4>
                        <p>$ {item.transactionAmount} -- <label style={{ color: item.transactionType === "expense" ? "red" : "green" }}>{item.transactionType}</label></p>
                    </li>
                )
            }
        </ul>

    )
}

export default TransactionList;
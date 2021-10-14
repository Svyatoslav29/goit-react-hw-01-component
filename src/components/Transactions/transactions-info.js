import React from 'react';
import PropTypes from 'prop-types';
import style from './transactions-info.module.css';
import TransactionItem from './transactions-item';


const Transaction = ({ items }) => {
    return (
        <section className={style.heads}>
            <table className={style.history}>
                <thead>
                    <tr>
                        <th className={style.li}>Type</th>
                        <th className={style.li}>Amount</th>
                        <th className={style.li}>Currency</th>
                    </tr>
                </thead>

                <tbody className={style.item}>
                    {items.map(item => (
                        <TransactionItem 
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

Transaction.prototypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

export default Transaction;
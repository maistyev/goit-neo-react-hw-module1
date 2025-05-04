import css from "./TransactionHistory.module.css";

function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.length > 0 ? (
          transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))
        ) : (
          <td colSpan="3">No transactions found</td>
        )}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

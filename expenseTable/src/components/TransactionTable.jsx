import { transactions } from "../data/transactions.js";
import "./TransactionTable.css";

function formatNumber(number) {
  return number.toLocaleString("en-US");
}

function TransactionTable() {
  return (
    <div className="card">
      <h2 className="title">تراکنش‌ها</h2>

      <table>
        <thead>
          <tr>
            <th>تاریخ</th>
            <th>درآمد (تومان)</th>
            <th>هزینه (تومان)</th>
            <th>شرح</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td className="date">{item.date}</td>

              <td className="income">
                {item.income ? (
                  <span className="number">
                    +{formatNumber(item.income)}
                    <span className="unit"> تومان</span>
                  </span>
                ) : null}
              </td>

              <td className="expense">
                {item.expense ? (
                  <span className="number">
                    -{formatNumber(item.expense)}
                    <span className="unit"> تومان</span>
                  </span>
                ) : null}
              </td>

              <td className="description">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;

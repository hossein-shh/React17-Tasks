import "./TransactionTable.css";

// عدد را فارسی می‌کند و کاما می‌گذارد: 3100000 -> ۳,۱۰۰,۰۰۰
function formatNumber(number) {
  return number.toLocaleString("fa-IR").replaceAll("٬", ",");
}

function TransactionTable({ transactions }) {
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
          {/* به ازای هر تراکنش یک سطر می‌سازیم */}
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

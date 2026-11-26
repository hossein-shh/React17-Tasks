import TransactionTable from "./components/TransactionTable.jsx";
import { transactions } from "./data/transactions.js";

function App() {
  return <TransactionTable transactions={transactions} />;
}

export default App;

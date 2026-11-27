import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "vazirmatn/misc/Farsi-Digits/Vazirmatn-FD-font-face.css";
import "./index.css";

import TransactionTable from "./components/TransactionTable.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TransactionTable />
  </StrictMode>,
);

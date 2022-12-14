import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import Main from "./components/Main/Main.component";
import Customers from "./pages/customers/Customers";
import Transactions from "./pages/transactions/Transactions";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/'  element={<Main />} />
        <Route path='/customers'  element={<Customers />} />
        <Route path='/transactions'  element={<Transactions />} />
      </Routes>
    </div>
  );
}

export default App;

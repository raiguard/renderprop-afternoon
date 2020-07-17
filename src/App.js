import React from "react";
import "./App.css";
import CurrencyConverter from "./Components/CurrencyConverter";
import CurrencyDisplay from "./Components/CurrencyDisplay";

const App = () => {
  return (
    <div>
      <CurrencyConverter
        render={(currencyData, amount) => <CurrencyDisplay currencyData={currencyData} amount={amount} />}
      />
    </div>
  );
};

export default App;

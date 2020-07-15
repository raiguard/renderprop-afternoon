import React, { useState } from "react";

export default (props) => {
  let [currencyChosen, setCurrencyChosen] = useState(false);
  let [selectedCurrency, setSelectedCurrency] = useState("Select currency");
  let [amount, setAmount] = useState(0);

  const currencyData = [
    { name: "Japanese Yen", symbol: "¥", rate: 113.6, id: 0 },
    { name: "British Pound", symbol: "£", rate: 0.77, id: 1 },
    { name: "Canadian Dollar", symbol: "CAD", rate: 1.32, id: 2 },
    { name: "Mexican Peso", symbol: "Mex$", rate: 20.41, id: 3 },
    { name: "Swiss Franc", symbol: "Fr.", rate: 1.01, id: 4 }
  ];

  return (
    <div>
      <select value={selectedCurrency}>
        <option value="Select currency">Select currency</option>
        {currencyData.map((entry, i) => (
          <option key={entry.id} value={i}>
            {entry.name}
          </option>
        ))}
      </select>
      <div>
        <button className="add">+</button>
        <button className="minus">-</button>
      </div>
      {props.render(currencyData[selectedCurrency], amount)}
    </div>
  );
};

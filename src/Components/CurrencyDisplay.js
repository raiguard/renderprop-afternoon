import React from "react";

// This is the reused bit - we pass things to it through props and it simply returns JSX to be displayed.
// In the component, we can conditionally render props.render() depending on other conditions, to avoid crashes.
export default (props) => (
  <p>
    US Dollar ${props.amount.toFixed(2)} - {props.currencyData.name} {props.currencyData.symbol}
    {(props.amount * props.currencyData.rate).toFixed(2)}
  </p>
);

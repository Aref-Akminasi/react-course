import React from 'react';

const Table = (props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    let totalInterest = 0;
    let intvestedCapital = 0;
    const yearlyContribution = +userInput['yearlySavings']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedInterest'] / 100;
    const duration = +userInput['investmentDuration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;

      currentSavings += yearlyInterest + yearlyContribution;
      intvestedCapital = currentSavings - totalInterest;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: totalInterest,
        intvestedCapital: intvestedCapital,
      });
    }
    return yearlyData;
    // do something with yearlyData ...
  };
  const data = calculateHandler(props.data);
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((y) => {
          return (
            <tr key={y.year}>
              <td>{y.year}</td>
              <td>{formatter.format(y.savingsEndOfYear)}</td>
              <td>{formatter.format(y.yearlyInterest)}</td>
              <td>{formatter.format(y.totalInterest)}</td>
              <td>{formatter.format(y.intvestedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

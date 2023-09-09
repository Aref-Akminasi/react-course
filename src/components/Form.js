import React, { useState } from 'react';

const Form = (props) => {
  const [data, setData] = useState({
    currentSavings: 0,
    yearlySavings: 0,
    expectedInterest: 0,
    investmentDuration: 0,
  });

  const sendData = (e) => {
    e.preventDefault();
    props.onSubmitForm(data);
  };
  const inputHandler = (key, inputValue) => {
    if (key === 'currentSavings') {
      setData((prev) => {
        return {
          ...prev,
          currentSavings: inputValue,
        };
      });
    }
    if (key === 'yealySavings') {
      setData((prev) => {
        return {
          ...prev,
          yearlySavings: inputValue,
        };
      });
    }
    if (key === 'expectedInterest') {
      setData((prev) => {
        return {
          ...prev,
          expectedInterest: inputValue,
        };
      });
    }
    if (key === 'investmentDuration') {
      setData((prev) => {
        return {
          ...prev,
          investmentDuration: inputValue,
        };
      });
    }
  };
  const resetHander = () => {
    setData({
      currentSavings: 0,
      yearlySavings: 0,
      expectedInterest: 0,
      investmentDuration: 0,
    });
  };
  return (
    <form className="form" onSubmit={sendData}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) => {
              inputHandler('currentSavings', e.target.value);
            }}
            value={data.currentSavings}
            min="0"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) => {
              inputHandler('yealySavings', e.target.value);
            }}
            value={data.yearlySavings}
            min="0"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) => {
              inputHandler('expectedInterest', e.target.value);
            }}
            value={data.expectedInterest}
            min="0"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => {
              inputHandler('investmentDuration', e.target.value);
            }}
            value={data.investmentDuration}
            min="0"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHander}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;

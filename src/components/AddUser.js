import styles from './AddUser.module.css';
import React, { useState } from 'react';
import Button from './wrappers/Button';
import Card from './wrappers/Card';

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({ username: '', age: 0 });

  const userInputHandler = (key, value) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitForm(userInput);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles.input}>
          <label htmlFor="username">Username</label>
          <input
            value={userInput.username}
            onChange={(event) =>
              userInputHandler('username', event.target.value)
            }
            id="username"
            type="text"
          ></input>
        </div>
        <div className={styles.input}>
          <label htmlFor="age">Age (Years)</label>
          <input
            value={userInput.age}
            onChange={(event) => userInputHandler('age', event.target.value)}
            id="age"
            type="number"
          ></input>
        </div>
        <Button text="Add User" />
      </form>
    </Card>
  );
};

export default AddUser;

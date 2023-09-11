import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import ErrorModal from './components/ErrorModal';

const currentUsers = [];

function App() {
  const [users, setUsers] = useState(currentUsers);
  const [isValid, setIsValid] = useState({ status: true, errMsg: '' });

  const onSubmitHandler = (newUser) => {
    if (newUser.username === '' && newUser.age <= 0) {
      setIsValid({
        status: false,
        errMsg: 'Please enter a valid name and age (non-empty values)',
      });
    } else if (newUser.username === '') {
      setIsValid({ status: false, errMsg: 'Please enter a valid username' });
    } else if (newUser.age <= 0) {
      setIsValid({
        status: false,
        errMsg: 'Please enter a valid age (age > 0)',
      });
    } else {
      setUsers((prev) => {
        return [newUser, ...prev];
      });
    }
  };

  const onProceed = () => {
    setIsValid({ status: true, errMsg: '' });
  };

  return (
    <div>
      <AddUser onSubmitForm={onSubmitHandler} />{' '}
      {users.length > 0 && <UsersList users={users} />}
      {!isValid.status && (
        <ErrorModal onProceed={onProceed} errMsg={isValid.errMsg} />
      )}
    </div>
  );
}

export default App;

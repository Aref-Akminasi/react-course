import styles from './UsersList.module.css';
import React from 'react';
import Card from './wrappers/Card';

const UsersList = (props) => {
  return (
    <Card>
      <div className={styles.users}>
        <ul>
          {props.users.map((user, idx) => (
            <li key={idx}>
              {user.username} ({user.age} years old)
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UsersList;

import styles from './ErrorModal.module.css';
import React from 'react';
import Card from './wrappers/Card';
import Button from './wrappers/Button';

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.content}>{props.errMsg}</div>
        <div className={styles.actions}>
          <span onClick={props.onProceed}>
            <Button text={'Okay'} />
          </span>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;

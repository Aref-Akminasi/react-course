import styles from './Button.module.css';
import React from 'react';

const Button = (props) => {
  return <button className={styles.button}>{props.text}</button>;
};

export default Button;

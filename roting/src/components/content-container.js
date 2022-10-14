import React from 'react';
import styles from "./content-container.module.css";
import { useMainContext } from '../context/MainContext';

function Container({ children }) {
  const { theme } = useMainContext();

  return (
    <div className={`${styles.content} ${styles[theme]}`}>
      {children}
    </div>
  );
}

export default Container;
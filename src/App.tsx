import React from "react";
import Header from "./Header/Header";
import styles from  './style.module.scss';

const App = () => {
  return(
  <div className={styles.header}>
    <Header />
    {/**
     * <div className="header">
        <h1>Header</h1>
      </div>
     */}
    <h1>DEPLOYING!!!</h1>
  </div>
  );
};

export default App;
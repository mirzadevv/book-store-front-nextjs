import React from "react";
import styles from "../../styles/components/navigation/mainHeader.module.css";
const MainHeader = (props) => {
  return (
    <>
      <header className={styles.mainHeader}>{props.children}</header>
    </>
  );
};

export default MainHeader;

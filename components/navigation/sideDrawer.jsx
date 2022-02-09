import React from "react";
import styles from "../../styles/components/navigation/sideDrawer.module.css";

const SideDrawer = (props) => {
  return (
    <aside
      className={
        props.drawerMode
          ? `${styles.sideDrawer} ${styles.sideDrawerShowMode}`
          : `${styles.sideDrawer} ${styles.sideDrawerHideMode}`
      }
    >
      {props.children}
    </aside>
  );
};

export default SideDrawer;

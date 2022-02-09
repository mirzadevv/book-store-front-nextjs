import React, { useState } from "react";
import styles from "../../styles/components/navigation/mainNavigation.module.css";
import MainHeader from "./mainHeader";
import Navbar from "./navbar";
import SideDrawer from "./sideDrawer";
import Link from "next/link";
import { FaShoppingBasket, FaWindowClose } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const MainNavigation = () => {
  const [drawerMode, setDrawerMode] = useState(false);

  return (
    <>
      <SideDrawer drawerMode={drawerMode}>
        <div className={styles.closeBtn}>
          <FaWindowClose
            size={30}
            style={{ cursor: "pointer", marginTop: "-1rem" }}
            onClick={() => setDrawerMode(false)}
          />
        </div>
        <div className={styles.navbarDrawer}>
          <Navbar />
        </div>
      </SideDrawer>
      <MainHeader>
        <div className={styles.mainNavigation}>
          <div className={styles.leftSide}>
            <div className={styles.title}>
              <Link href="/">
                <a>Mirzaei</a>
              </Link>
            </div>
            <div className={styles.navbarDesktopMode}>
              <Navbar />
            </div>
          </div>
          <div className={styles.rightSide}>
            <FaShoppingBasket size={25} className="cursorPointer" />
            <FaBars
              size={25}
              className={styles.showMode}
              onClick={() => setDrawerMode(true)}
            />
          </div>
        </div>
      </MainHeader>
    </>
  );
};

export default MainNavigation;

import React, { useState, useContext } from "react";
import AuthContext from "../../context/authContext";
import styles from "../../styles/components/navigation/mainNavigation.module.css";
import MainHeader from "./mainHeader";
import Navbar from "./navbar";
import SideDrawer from "./sideDrawer";
import SearchInput from "../uiElements/searchInput";
import Link from "next/link";

import {
  FaShoppingBasket,
  FaWindowClose,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const MainNavigation = () => {
  const [drawerMode, setDrawerMode] = useState(false);
  const { user, logout } = useContext(AuthContext);

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
                <a>BookStore</a>
              </Link>
            </div>
            <div className={styles.navbarDesktopMode}>
              <Navbar />
            </div>
          </div>
          <div className={styles.rightSide}>
            <SearchInput />

            {user ? (
              <>
                <div className={styles.icon} onClick={logout}>
                  <FaSignOutAlt size={25} style={{ marginRight: "1rem" }} />
                  <span>Logout</span>
                </div>
                <Link href="/account/dashboard">
                  <div className={styles.icon}>
                    <FaUser size={20} style={{ marginRight: "1rem" }} />
                    <span>Dashboard</span>
                  </div>
                </Link>
                <Link href="/order">
                  <FaShoppingBasket size={25} className="cursorPointer" />
                </Link>
              </>
            ) : (
              <Link href="/account/login">
                <div className={styles.icon}>
                  <FaSignInAlt size={25} style={{ marginRight: "1rem" }} />
                  <span>Login</span>
                </div>
              </Link>
            )}

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

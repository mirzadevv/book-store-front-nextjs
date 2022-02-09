import React from "react";
import MainHeader from "./mainHeader";
import Navbar from "./navbar";
import Link from "next/link";
import { FaShoppingBasket } from "react-icons/fa";

const MainNavigation = () => {
  return (
    <>
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
          </div>
        </div>
      </MainHeader>
    </>
  );
};

export default MainNavigation;

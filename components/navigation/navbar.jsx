import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/books">
            <a> Books </a>
          </Link>
        </li>
        <li>
          <Link href="/authors">
            <a> Authors </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

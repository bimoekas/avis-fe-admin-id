import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import SignModal from "./SignModal";
import ModalSubscribe from "./ModalSubscribe";

const Nav = (props) => {
  const [btnMobile, setBtnMobile] = useState(false);

  // useEffect(() => {
  //   props.setIsMenu(btnMobile);
  // }, [btnMobile]);
  let publicUrl = process.env.PUBLIC_URL + '/'
  return (
    <>
      <div className="main-menu__inner">
        {/* <MobileMenu btnIsMobile={btnMobile} setIsMobile={setBtnMobile} /> */}
        <ul className="main-menu__list myNav">
          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `/`}>Booking & Transactions</Link>
          </li>
          <li className="dropdown">
            <a href={process.env.PUBLIC_URL + `#`}>Sign Out</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;

import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignModal from "./SignModal";

const menuData = [
  {
    title: "RESERVATIONS",
    path: "",
    subNav: [
      {
        title: "MAKE A RESERVATION",
        path: "/makereservation",
      },
      {
        title: "RESERVATION CONFIRMATION/CANCELLATION",
        path: "/view-cancel",
      },
      {
        title: "GET E-RECEIPT",
        path: "https://www.avis.com/en/reservation/get-e-receipt",
      },
    ],
  },
  {
    title: "EVENT AND SPECIALS",
    path: "/",
    subNav: [
      {
        title: "PROMOTION",
        path: "/promotion",
      },
    ],
  },

  {
    title: "LOCATIONS",
    path: "#",
    subNav: [
      {
        title: "FIND A LOCATION",
        path: "/findlocation",
      },
      {
        title: "TOP AIRPORT LOCATIONS",
        path: "/airportlocation",
      },
    ],
  },
  {
    title: "CARS & SERVICES",
    path: "#",
    subNav: [
      {
        title: "CAR GUIDES",
        path: "/carguides",
      },
      {
        title: "PRODUCT & SERVICES",
        path: "/productservice",
      },
      {
        title: "PROTECTION & COVERAGE",
        path: "/protection",
      },
      {
        title: "PROGRAM",
        path: "/program",
      },
    ],
  },
  {
    title: "HELP",
    path: "/",
    subNav: [
      {
        title: "CUSTOMER SERVICE",
        path: "/customer-service",
      },
      {
        title: "FAQS",
        path: "https://faq.avis.co.uk/",
      },
      {
        title: "CONTACT US",
        path: "/contact-us",
      },
      {
        title: "RESERVATION / CANCELLACTION",
        path: "/view-cancel",
      },
      {
        title: "RENTAL LOCATION TERMS AND CONDITION",
        path: "https://www.avis.co.uk/TermsAndCondition",
      },
    ],
  },
  {
    title: "AVIS PREFERRED",
    path: "/",
  },
  {
    title: "SIGN UP",
    path: "/register",
  },
];

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 1em;
  &:hover {
    background: #ff6f0f;
    color: #fff;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  color: #000;
  font-weight: 400;
  font-size: 17px;
  margin-bottom: 1em;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  &:hover,
  &:active {
    background: #ff6f0f;
    cursor: pointer;
    color: #fff;
  }
`;

const SubMenu = (props) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    props.setSubBar(!props.sideSubBar);
    props.setSubIndex(props.idx);
    setSubnav(!subnav);
  };

  return (
    <>
      <SidebarLink
        to={process.env.PUBLIC_URL + `${props.item.path}`}
        onClick={props.item.subNav && showSubnav}
      >
        <div>
          {props.item.icon}
          <SidebarLabel>{props.item.title}</SidebarLabel>
        </div>
        {/* <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div> */}
      </SidebarLink>
    </>
  );
};

const NavIcon = styled(Link)`
  color: #ff6f0f;
  font-size: 2rem;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const SidebarNav = styled.nav`
  background-color: #fff;
  width: 300px;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
  box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
  top: 113px;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 99999;
  border-left: 3px solid #d0d0d0;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const MobileMenu = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [sideSubBar, setSideSubBar] = useState(false);
  const [subIndex, setSubIndex] = useState(0);

  const showSidebar = () => setSidebar(!sidebar);
  const showSideSubbar = () => setSideSubBar(!sideSubBar);

  const changeBtnMenu = () => props.setIsMobile(!props.btnIsMobile);
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <>
        <div className="d-xl-none d-flex justify-content-end align-items-center top-mobile">
          <Link
            to={process.env.PUBLIC_URL + `/avispreferred`}
            className="me-3 d-sm-flex d-none"
          >
            AVIS PREFERRED
          </Link>
          <Link
            to={process.env.PUBLIC_URL + `/register`}
            className="me-3 d-sm-flex d-none"
          >
            SIGN UP
          </Link>
          <span className="d-sm-flex d-none">
            <SignModal />
          </span>
          <button
            className={`py-1 px-2 ms-3`}
            style={{
              background: `${props.btnIsMobile ? "#fff" : "transparant"}`,
              fontWeight: "400",
              color: "#000",
              border: "2px solid #000",
              fontSize: "14px",
            }}
            onClick={() => {
              showSidebar();
              changeBtnMenu();
              if (sideSubBar) {
                showSideSubbar();
              }
            }}
          >
            MENU
          </button>
        </div>
        {/* <NavIcon to="#" style={{ justifyContent: "flex-end" }}>
          <AiOutlineBars onClick={showSidebar} />
        </NavIcon> */}

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <div
              className="mobile-nav__content"
              style={{ backgroundColor: "#fff" }}
            >
              {menuData.map((item, index) => (
                <SubMenu
                  item={item}
                  key={index}
                  setSubBar={setSideSubBar}
                  setSubIndex={setSubIndex}
                  idx={index}
                />
              ))}
              <SignModal />
            </div>
          </SidebarWrap>
        </SidebarNav>
        <SidebarNav sidebar={sideSubBar}>
          <SidebarWrap>
            <div
              className="mobile-nav__content"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="sub-heading d-flex align-items-center ps-2 mb-3">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/icon/arrow.png`}
                  style={{ transform: "rotate(90deg)" }}
                  width={30}
                  height={30}
                  onClick={showSideSubbar}
                />
                <h4 className="ms-2 text-dark">{menuData[subIndex].title}</h4>
              </div>
              {menuData[subIndex].subNav.map((item, index) => (
                <SubMenu item={item} key={index} />
              ))}
            </div>
          </SidebarWrap>
        </SidebarNav>
      </>
    </>
  );
};

export default MobileMenu;

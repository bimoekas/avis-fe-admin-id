import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import Nav from "./Nav";
import OptionHeader from "./OptionHeader";

const HeaderOne = (props) => {
  const [btnMenu, setBtnMenu] = useState(false);

  let publicUrl = process.env.PUBLIC_URL + "/";
  const myBgHead = {
    background: "linear-gradient(#eaeaea,#fff)!important",
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [expand, setExpand] = useState(false);
  const isClient = typeof window === "object";

  function scrollReducer(state, action) {
    switch (action.type) {
      case "update":
        return {
          scroll: action.payload,
        };
      default:
        return state;
    }
  }

  function useScroll() {
    const [state, dispatch] = useReducer(scrollReducer, {
      scroll: 0,
    });

    function getScroll() {
      return isClient
        ? window.pageYOffset || document.documentElement.scrollTop
        : undefined;
    }

    function handleScroll() {
      dispatch({ type: "update", payload: getScroll() });
    }

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });

    return state;
  }

  const scroll = useScroll();

  useEffect(() => {
    if (props.scroll) {
      setScrollPosition(window.pageYOffset);
      if (scrollPosition >= 500) setExpand(true);
      else setExpand(false);
    }
  }, [scroll]);

  return (
    <>
      <header
        class="main-header main-header-one clearfix"
        style={{
          position: "sticky",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "99",
        }}
      >
        <div class="main-header-one__wrapper" style={myBgHead}>
          {/* <div class="main-header-one__top">
                            <div class="container">
                                <div class="main-header-one__top-inner">
                                    <div class="main-header-one__top-address">
                                        <ul>
                                        </ul>
                                    </div>

                                    <div class="main-header-one__top-address">
                                        <ul>
                                            <li><a href="#">
                                                <SignModal />
                                            </a></li>
                                            <li><a href={process.env.PUBLIC_URL + `/register`}>Register</a></li>
                                            <li><a href={process.env.PUBLIC_URL + `/businessrentals`}>Bussiness Rentals</a></li>
                                            <li><a href="#">Car Sales</a></li>
                                            <li><a href={process.env.PUBLIC_URL + `/customercare`}>Customer Care</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}

          <div class="main-header-one__bottom">
            <nav class="main-menu main-menu--1">
              <div class="main-menu__wrapper">
                <div class="container">
                  <div class="main-menu__wrapper-inner py-3">
                    <div class="main-header-one__bottom-left">
                      <div class="logo">
                        <Link to={process.env.PUBLIC_URL + `/`}>
                          <img
                            src={publicUrl + "assets/images/icon/avis.png"}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>

                    <div class="main-header-one__bottom-right">
                      <Nav btnIsMenu={btnMenu} setIsMenu={setBtnMenu} />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {props.optionHeader ? (
        props.scroll ? (
          expand ? (
            btnMenu ? (
              ""
            ) : (
              <OptionHeader />
            )
          ) : (
            ""
          )
        ) : btnMenu ? (
          ""
        ) : (
          <OptionHeader />
        )
      ) : (
        ""
      )}
    </>
  );
};

export default HeaderOne;

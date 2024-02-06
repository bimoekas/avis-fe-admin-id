import React, { useEffect, useReducer, useRef, useState } from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import HeadNotice from "../common/header/HeadNotice";
import ContentPrivacy from "../components/privacy/ContentPrivacy";
import HeaderFour from "../common/header/HeaderFour";
import Title from "../Title";

const PrivacyNotice = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expand, setExpand] = useState(false);
  const isClient = typeof window === "object";
  Title("Privacy Notice");
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
    setScrollPosition(window.pageYOffset);
    if (scrollPosition >= 1380) setExpand(true);
    else setExpand(false);
  }, [scroll]);

  return (
    <>
      <HeaderOne />
      <HeaderFour expand={expand} />
      <HeadNotice />
      <ContentPrivacy />
      <FooterOne />
    </>
  );
};

export default PrivacyNotice;

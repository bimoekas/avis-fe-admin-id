import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from "wowjs";
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/HomeDefault";
import DashboardAdmin from "./pages/DashboardAdmin";
import ScrollToTopRoute from "./components/scroll-to-top-route/ScrollToTopRoute";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Router>
      <ScrollToTopRoute />
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          exact
          element={<HomeDefault />}
        />
        {/* Register */}
        <Route
          path={`${process.env.PUBLIC_URL}/dashboard`}
          exact
          element={<DashboardAdmin />}
        />
      </Routes>
      <ScrollToTop
        className="scrollUp"
        smooth
        top="1500"
        component={<FaAngleUp />}
      />
    </Router>
  );
}

export default App;

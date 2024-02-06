import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container py-5">
      <h1 className="text-dark">CONTACT AVIS CUSTOMER SERVICE</h1>
      <p className="text-dark">
        Do you want to talk to an Avis customer service agent? For help in the
        United States, call <b>1-800-352-7900</b>. Visit the{" "}
        <Link className="link-avis">Worldwide Telephone Numbers page</Link> for
        help in other countries. Helpful links for many common customer service
        needs are found below.
      </p>
    </div>
  );
};

export default Header;

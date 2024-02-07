import React, { useEffect, useState } from "react";
import HeroOne from "../components/hero/HeroOne";
import ContentOne from "../components/index/ContentOne";
import ContentThree from "../components/index/ContentThree";
import FooterOne from "../common/footer/FooterOne";
import Axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../core/constant.js";
import HeaderOne from "../common/header/HeaderOne";
import Title from "../Title";
import ModalSubscribe from "../common/header/ModalSubscribe";

const HomeDefault = () => {
  Title("Avis Car Rental");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const email_change = (event) => setEmail(event.target.value);
  const password_change = (event) => setPassword(event.target.value);

  useEffect(() => {
    // check token if exist in local storage
    if (localStorage.getItem("token")) {
      window.location.href = "/dashboard";
    }
  }, []);

  const submit = () => {
    // Axios.get("https://backend.avis-id.com/public/sanctum/csrf-cookie",{withCredentials: true}).then((resp)=>{
    Axios.post(
      // `${API_URL}/api/auth/signin`,
      `${API_URL}/api/auth/signinAdminAvis`,
      {
        email: email,
        password: password,
      },
      {
        // withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("name", res.data.email);
      const expires = new Date();
      expires.setTime(expires.getTime() + 21600 * 1000);
      document.cookie = `subscribe=true;expires=${expires.toUTCString()};path=/`;
      window.location.href = "/dashboard";
    }).catch((err) => {
      alert(err.response.data.msg);
    })
    // });
  };
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <form action="#" style={{ width: "600px" }} className="card">
        <div className="container p-5">
          <div className="d-flex justify-content-center">
            <h4 style={{ color: "#000" }}>
              AVIS ADMIN PANEL LOGIN.
            </h4>
          </div>
          <div className="row pt-3">
            <div className="col-xl-12">
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                onChange={(e) => email_change(e)}
                name="name"
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-xl-12">
              <input
                className="form-control"
                type="password"
                placeholder="Password (Case Sensitive)"
                name="name"
                onChange={(e) => password_change(e)}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-xl-6 text-dark">
              <b>Remember Me</b>
            </div>
            <div className="col-xl-6 text-end">
              <div className="form-check form-switch form-check-reverse">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckReverse"
                />
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-xl-12">
              This site is protected by reCAPTCHA Enterprise and the
              Google Privacy Policy and Terms of Service apply.
            </div>
          </div>
          <div className="row pt-3 justify-content-center">
            <button
              onClick={() => submit()}
              className="ml-2 mr-2 col-xl-12 btn btn-avis"
            >
              LOG IN
            </button>
          </div>
          <div className="row border-bottom py-2"></div>
          {/* <div className="row pt-2">
            <div className="col-sm-12 text-center">
              <b>Need an account?</b>{" "}
              <Link to="/register" className="link-avis">
                Create one now
              </Link>
            </div>
          </div> */}
        </div>
        {/* <label for="search" class="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" class="thm-btn2">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button> */}
      </form>
    </div>
  );
};

export default HomeDefault;

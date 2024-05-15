import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../core/constant";

const SignModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const email_change = (event) => setEmail(event.target.value);
  const password_change = (event) => setPassword(event.target.value);

  const submit = () => {
    // Axios.get("https://backend.avis-id.com/public/sanctum/csrf-cookie",{withCredentials: true}).then((resp)=>{
    Axios.post(
      // `${API_URL}/api/auth/signin`,
      `${API_URL}/api/auth/signin`,
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
      if (res.data.status == false) {
        alert(res.data.msg);
      } else {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("customer_id", res.data.customer_id);
        const expires = new Date();
        expires.setTime(expires.getTime() + 21600 * 1000);
        document.cookie = `subscribe=true;expires=${expires.toUTCString()};path=/`;
        window.location.reload();
      }
    });
    // });
  };
  return (
    <>
      <li>
        {/* <a href="#" className="main-menu__search search-toggler icon-search" variant="primary" onClick={handleShow}></a> */}
        <a
          href="#"
          className="main-menu__search search-toggler"
          variant="primary"
          onClick={handleShow}
        >
          LOG IN
        </a>
      </li>
      <div className="search-popup">
        <Modal
          show={show}
          onHide={handleClose}
          className="search-popup__overlay search-toggler"
        >
          <div className="search-popup__content">
            <form action="#">
              <div className="container p-5">
                <div className="row">
                  <div className="col-xl-9">
                    <h4 style={{ color: "#000" }}>
                      LOG INTO YOUR AVIS ACCOUNT.
                    </h4>
                  </div>
                  <div className="col-xl-3 text-end">
                    <a
                      href="#"
                      className="main-menu__search search-toggler"
                      onClick={handleClose}
                    >
                      Cancel
                    </a>
                  </div>
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
                <div className="row pt-3">
                  <button
                    onClick={() => submit()}
                    className="ml-2 mr-2 col-xl-12 btn btn-avis"
                  >
                    LOG IN
                  </button>
                </div>
                <div className="row border-bottom py-2"></div>
                <div className="row pt-2">
                  <div className="col-sm-12 text-center">
                    <b>Need an account?</b>{" "}
                    <Link to="/register" className="link-avis">
                      Create one now
                    </Link>
                  </div>
                </div>
              </div>
              {/* <label for="search" class="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" class="thm-btn2">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button> */}
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SignModal;

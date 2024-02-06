import React, { useEffect, useState, Component } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../core/constant.js";

class PM extends React.Component {
  resend(event) {
    Axios.post(
      // `${API_URL}/api/auth/signout`,
      `${API_URL}/api/auth/signout`,
      {},
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        //    console.log(res.data);
        if (res.data.status == false) {
          alert(res.data.msg);
        } else {
          alert(res.data.msg);
          localStorage.clear();
          window.location.href = "/";
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Please Sign In First");
        }
      });
  }

  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row mt-3 pb-3">
              <div className="col-sm-12">
                <nav className="main-menu main-menu--1">
                  <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                      <div className="main-header-one__bottom-right">
                        <div className="menu__inner">
                          <ul className="main-menu__list myNav">
                            {/* <li>
                              <a href={process.env.PUBLIC_URL + "userhome"}>
                                Home
                              </a>
                            </li> */}
                            <li>
                              <a href={process.env.PUBLIC_URL + "bookinglist"}>
                                Booking & Transaction List
                              </a>
                            </li>
                            <li className="dropdown">
                              <a href="#" onClick={(e) => this.resend(e)}>
                                Sign Out
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

function PMN(props) {
  let navigate = useNavigate();

  return <PMN {...props} navigate={navigate} />;
}

export default PM;

import React, { useEffect, useState, Component } from 'react';
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import Header from "../common/header/Header";
import { Link } from "react-router-dom";
import Title from '../Title';
import Axios from 'axios';
import { API_URL } from '../core/constant';
class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id_card: '',
      email: '',
      password: '',
      cpassword: '',
      name: '',
      last_name: '',
      telephone_number: '',
      cellphone_number: '',
      country: '',
      bcd_code: '',
      year_of_birth: '',
      month_of_birth: '',
      date_of_birth: '',
    }
  }

  submit(event) {
    event.preventDefault();
    if (this.state.id_card == '') {
      alert('Please input your ID CARD');
      return
    }
    if (this.state.name == '') {
      alert('Please input your NAME');
      return
    }
    if (this.state.last_name == '') {
      alert('Please input your LAST NAME');
      return
    }
    if (this.state.password == '') {
      alert('Please input your PASSWORD');
      return
    }
    if (this.state.email == '') {
      alert('Please input your EMAIL');
      return
    }
    if (this.state.cellphone_number == '') {
      alert('Please input your CELLPHONE NUMBER');
      return
    }
    if (this.state.cellphone_number == '') {
      alert('Please input your CELLPHONE NUMBER');
      return
    }
    if (this.state.password != this.state.cpassword) {
      alert('Please input confrimation password correctly');
      return
    }
    Axios.post(
      `${API_URL}/api/auth/signup`,
      // `http://localhost:8000/api/auth/signup`,
      {
        email: this.state.email,
        name: this.state.name,
        last_name: this.state.last_name,
        telephone_number: this.state.telephone_number,
        cellphone_number: this.state.cellphone_number,
        country: this.state.country,
        bcd_code: this.state.bcd_code,
        year_of_birth: this.state.year_of_birth,
        month_of_birth: this.state.month_of_birth,
        date_of_birth: this.state.date_of_birth,
        password: this.state.password,
        id_card: this.state.id_card,
      }
    ).then((res) => {
      console.log(res.data.status);
      if (res.data.status == false) {
        alert(res.data.msg);
      } else {
        alert(res.data.msg);
        window.location.href = '/register';
      }
    });
  }

  name_change(event) {
    this.setState({
      name: event.target.value
    })
  }

  id_card_change(event) {
    this.setState({
      id_card: event.target.value
    })
  }

  last_name_change(event) {
    this.setState({
      last_name: event.target.value
    })
  }

  email_change(event) {
    this.setState({
      email: event.target.value
    })
  }

  cellphone_number_change(event) {
    this.setState({
      cellphone_number: event.target.value
    })
  }

  telephone_number_change(event) {
    this.setState({
      telephone_number: event.target.value
    })
  }

  country_change(event) {
    this.setState({
      country: event.target.value
    })
  }

  bcd_code_change(event) {
    this.setState({
      bcd_code: event.target.value
    })
  }

  year_of_birth_change(event) {
    this.setState({
      year_of_birth: event.target.value
    })
  }

  month_of_birth_change(event) {
    this.setState({
      month_of_birth: event.target.value
    })
  }

  date_of_birth_change(event) {
    this.setState({
      date_of_birth: event.target.value
    })
  }

  password_change(event) {
    this.setState({
      password: event.target.value
    })
  }

  cpassword_change(event) {
    this.setState({
      cpassword: event.target.value
    })
  }

  render() {
    // Title ('Become a budget rental member');
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <div>
          <HeaderOne />
          <Header
            title="Sign up"
            subtitle="Become a budget rental member. If you become a member, you can use the reservation service faster and more conveniently."
          />
          <div className="carsContainer py-5">
            <div className="container py-5 bg-white">
              <p style={{ color: "#ed5505" }} className="mb-3">
                * Indication is mandatory
              </p>
              <hr />
              <form onSubmit={(e) => this.submit(e)}>
                <div className="px-5">
                  <div className="mb-4 text-dark">
                    <label style={{ color: "#ed5505" }} className="mb-3">
                      *ID Card
                    </label>
                    <div className="row">
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ID Card"
                          onChange={(e) => this.id_card_change(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3" style={{ color: "#ed5505" }}>
                          *Password (8 or more characters mixed with English, numbers,
                          and special characters)
                        </div>
                        <div className="col-md-12 mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => this.password_change(e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3 text-dark">
                          Confirm password
                        </div>
                        <div className="col-md-12">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            onChange={(e) => this.cpassword_change(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3" style={{ color: "#ed5505" }}>
                          *Last name
                        </div>
                        <div className="col-md-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name (in English)"
                            onChange={(e) => this.last_name_change(e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3" style={{ color: "#ed5505" }}>
                          *Name
                        </div>
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name (US)"
                            onChange={(e) => this.name_change(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3" style={{ color: "#ed5505" }}>
                          *email
                        </div>
                        <div className="col-md-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="email"
                            onChange={(e) => this.email_change(e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3 text-dark">
                          telephone number
                        </div>
                        <div className="col-md-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="telephone number"
                            onChange={(e) => this.telephone_number_change(e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3 text-dark">*cell phone</div>
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="cell phone"
                            onChange={(e) => this.cellphone_number_change(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3 text-dark">country</div>
                        <div className="col-md-12 mb-3">
                          <select className="form-control" onChange={(e) => this.country_change(e)}>
                            <option>Indonesia</option>
                            <option>Vietnam</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-12 mb-3 text-dark">BCD CODE</div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="BCD CODE"
                          onChange={(e)=>this.bcd_code_change(e)}
                        />
                      </div>
                    </div>
                  </div> */}
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3 text-dark">Year of birth</div>
                        <div className="col-md-12 mb-3">
                          <select className="form-control" onChange={(e) => this.year_of_birth_change(e)}>
                            <option>choice</option>
                            <option>2004</option>
                            <option>2003</option>
                            <option>2002</option>
                            <option>2001</option>
                            <option>2000</option>
                            <option>1999</option>
                            <option>1998</option>
                            <option>1997</option>
                            <option>1996</option>
                            <option>1995</option>
                            <option>1994</option>
                            <option>1993</option>
                            <option>1992</option>
                            <option>1991</option>
                            <option>1990</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3 text-dark">Month</div>
                        <div className="col-md-12 mb-3">
                          <select className="form-control" onChange={(e) => this.month_of_birth_change(e)}>
                            <option>choice</option>
                            {[...Array(12)].map((e, i) => {
                              return <option key={i}>{i + 1}</option>;
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12 mb-3 text-dark">Date</div>
                        <div className="col-md-12 mb-3">
                          <select className="form-control" onChange={(e) => this.date_of_birth_change(e)}>
                            <option>choice</option>
                            {[...Array(31)].map((e, i) => {
                              return <option key={i}>{i + 1}</option>;
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row text-dark">
                    <label>Whether to receive informational e-mails</label>
                    <div className="col-sm-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label className="form-check-label" for="defaultCheck1">
                          I'll get the newsletter.{" "}
                          <a
                            href={publicUrl + "privacy-notice"}
                            target="_blank"
                            className="text-dark text-decoration-underline"
                          >
                            PRIVACY POLICY
                          </a>{" "}
                          and{" "}
                          <a
                            href={publicUrl + "terms-of-use"}
                            target="_blank"
                            className="text-dark text-decoration-underline"
                          >
                            Terms of Use
                          </a>{" "}
                          I agree.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btnCar my-3" type='submit'>Sign up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <FooterOne />
        </div>
      </>
    )
  }
}

export default Signup;

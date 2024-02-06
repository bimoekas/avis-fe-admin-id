import React from "react";

const GuaranteeForm = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const upload = () => {
    const btnUpload = document.getElementById("upload");
    btnUpload.click();
  };
  return (
    <div>
      <h4 className="link-avis mb-4">YOUR PREPAID RENTAL INFORMATION</h4>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="first_name">First Name</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" type="text" id="first_name" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="last_name">Last Name</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" type="text" id="last_name" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="email">Email Address</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" type="text" id="email" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="phone">Phone</label>
        </div>
        <div className="col-md-5">
          <input className="form-control" type="text" id="phone" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label>Country</label>
        </div>
        <div className="col-md-5">
          <select className="form-control">
            <option>U.S.A.</option>
            <option>England</option>
            <option>Indonesia</option>
            <option>France</option>
          </select>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="wizard_number">Wizard Number</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" type="text" id="wizard_number" />
        </div>
      </div>
      <h4 className="link-avis mb-4">AVIS.COM PREPAID RENTAL INFORMATION</h4>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="prepaid_info">Avis Prepaid Confirmation</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" type="text" id="prepaid_info" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="base_rate">Base Rate Quoted</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" type="text" id="base_rate" />
          <p>
            <b>Please Note:</b> Please enter the price before taxes, fees, &
            optional products.
          </p>
        </div>
      </div>
      <h4 className="link-avis mb-4">LOWER RATE CAR RENTAL INFORMATION</h4>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="best_rate">Best Rate Quoted</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" type="text" id="best_rate" />
          <p>
            <b>Please Note:</b> Please enter the price before taxes, fees, &
            optional products.
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="pick_location">Pick Up Location</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" type="text" id="pick_location" />
          <p>Please enter City, State or Airport in Pick-Up Location.</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label>Pick Up Date</label>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-4">
              <select className="form-control">
                {months.map((e, i) => {
                  return <option key={i}>{e}</option>;
                })}
              </select>
            </div>
            <div className="col-4">
              <select className="form-control">
                {[...Array(31)].map((e, i) => {
                  return <option key={i}>{i + 1}</option>;
                })}
              </select>
            </div>
            <div className="col-4">
              <input className="form-control" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="pick_time">Pick Up Time</label>
        </div>
        <div className="col-md-5">
          <input className="form-control" type="text" id="pick_time" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="drop-location">Drop Off Location</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" type="text" id="drop-location" />
          <p>Please enter City, State or Airport in Pick-Up Location.</p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="drop-date">Drop Off Date</label>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-4">
              <select className="form-control">
                {months.map((e, i) => {
                  return <option key={i}>{e}</option>;
                })}
              </select>
            </div>
            <div className="col-4">
              <select className="form-control">
                {[...Array(31)].map((e, i) => {
                  return <option key={i}>{i + 1}</option>;
                })}
              </select>
            </div>
            <div className="col-4">
              <input className="form-control" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="drop-time">Drop Off Time</label>
        </div>
        <div className="col-md-5">
          <input type="text" className="form-control" id="drop-time" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label>Vehicle Type/Car Class</label>
        </div>
        <div className="col-md-5">
          <select className="form-control">
            <option>Please Select</option>
            <option>Economy Group A</option>
            <option>Economy Group B</option>
            <option>Economy Group C</option>
          </select>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label>Pick Up Country</label>
        </div>
        <div className="col-md-5">
          <select className="form-control">
            <option>U.S.A.</option>
            <option>England</option>
            <option>Indonesia</option>
            <option>France</option>
          </select>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="website">Website</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" id="website" type="text" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="reservation">Reservation Number (if booked)</label>
        </div>
        <div className="col-md-9">
          <input className="form-control" id="reservation" type="text" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label for="comments">Comments/ Questions</label>
        </div>
        <div className="col-md-9">
          <textarea className="form-control" rows="4" id="comments" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label>Have a digital copy of the lower rate</label>
        </div>
        <div className="col-md-9">
          <button
            type="button"
            className="btn btn-upload px-5 py-2"
            onClick={upload}
          >
            <b>UPLOAD</b>
          </button>
          <input type="file" id="upload" style={{ visibility: "hidden" }} />
        </div>
      </div>
    </div>
  );
};

export default GuaranteeForm;
